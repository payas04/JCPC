import { FileText, Send, Trash2, Upload } from "lucide-react";
import { useCallback, useState } from "react";
import Papa from "papaparse";
import { useDropzone } from "react-dropzone";
import { csvUploadApi } from "../../lib/api";
import toast from "react-hot-toast";
import { useOutletContext } from "react-router-dom";
import { useAuth } from "../../context/auth";

const CsvUpload = () => {
	const [jsonData, setJsonData] = useState(null);
	const [file, setFile] = useState(null);
	const { setTrigger } = useAuth();
	const { setRefreshTrigger } = useOutletContext();
	const [loading, setLoading] = useState(false);

	const columns = [
		"DomainID",
		"blocker",
		"critical",
		"major",
		"normal",
		"minor",
		"current_total",
		"previous_total",
	];

	const onDrop = useCallback((acceptedFiles) => {
		const csvFile = acceptedFiles[0];
		setFile(acceptedFiles[0]);

		Papa.parse(csvFile, {
			header: true,
			complete: (results) => {
				// Transform the data before setting state
				const transformedData = transformData(results.data);
				setJsonData(transformedData);
			},
			error: (error) => {
				console.error("Error parsing CSV:", error);
			},
		});
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: {
			"text/csv": [".csv"],
		},
		multiple: false,
	});

	const transformData = (data) => {
		console.log(data);

		return data
			.filter((item) => {
				// Filter out entries with empty DomainID or where all scores are 0
				const hasValidDomain = item.DomainID && item.DomainID.trim() !== "";
				const hasNonZeroScores =
					parseInt(item["blocker"] || 0) > 0 ||
					parseInt(item["critical"] || 0) > 0 ||
					parseInt(item["major"] || 0) > 0 ||
					parseInt(item["normal"] || 0) > 0 ||
					parseInt(item["minor"] || 0) > 0;

				return hasValidDomain || hasNonZeroScores;
			})
			.map((item) => {
				// Create a new object to hold transformed data
				const transformedItem = {
					domainID: (item.DomainID || "").trim().toLowerCase(),
				};

				transformedItem.score = {
					current: parseInt(item["current_total"]) || 0,
					previous: parseInt(item["previous_total"] || 0),
				};

				// Create a nested issues object
				transformedItem.issues = {
					blocker: parseInt(item["blocker"] || 0),
					critical: parseInt(item["critical"] || 0),
					major: parseInt(item["major"] || 0),
					normal: parseInt(item["normal"] || 0),
					minor: parseInt(item["minor"] || 0),
				};

				return transformedItem;
			});
	};

	const handleCsvSubmit = async () => {
		console.log("clicked");
		if (!file) {
			toast.error("Please select a file first.");
			return;
		}

		try {
			setLoading(true);
			const response = await csvUploadApi(jsonData);
			if (response.data.success) {
				const result = await response.data.usersNotFound;
				if (result)
					alert(result.map((names) => names.domainID) + " DomainIDs not found");
				toast.success("Upload successful!");
				setRefreshTrigger((prev) => !prev);
				setTrigger((prev) => !prev);
				setJsonData(null);
				setFile(null);
				setLoading(false);
			} else {
				setLoading(false);
				toast.error("Failed to upload data.");
			}
		} catch (error) {
			setLoading(false);
			toast.error(`${error.response.data.message}`);
			console.error("Error uploading data:", error);
		}
	};

	const clearFileInput = () => {
		setJsonData(null);
		setFile(null);
	};

	return (
		<div className="relative p-4 space-y-2">
			<h2 className="text-2xl font-bold">Upload CSV File</h2>
			<div className="flex">
				<div
					{...getRootProps()}
					className={`border-2 border-dashed rounded-lg p-8 text-center w-full transition-colors ${
						isDragActive ? "border-black bg-black/5" : "hover:border-black"
					}`}>
					<input {...getInputProps()} disabled={loading} />
					<div className="flex flex-col items-center gap-2">
						<Upload className="h-8 w-8 text-muted-foreground" />
						{isDragActive ? (
							<p>Drop the CSV file here</p>
						) : (
							<>
								<p className="text-sm text-muted-foreground">
									Drag and drop your CSV file here, or click to select
								</p>
								<p className="text-xs text-muted-foreground">
									Only .csv files are accepted
								</p>
							</>
						)}
					</div>
				</div>
			</div>
			{loading && (
				<div className="flex flex-col items-center justify-center h-full">
					<div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
					<p className="mt-4 text-sm text-muted-foreground">
						Processing CSV file...
					</p>
				</div>
			)}

			{file && (
				<div className="flex items-center justify-between p-4 border rounded-lg">
					<div className="flex items-center gap-2">
						<FileText className="h-4 w-4" />
						<span className="text-sm font-medium">{file.name}</span>
						<span className="text-xs">
							({(file.size / 1024).toFixed(1)} KB)
						</span>
					</div>
					<button
						variant="ghost"
						size="icon"
						disabled={loading}
						onClick={clearFileInput}
						className="h-8 w-8 text-muted-foreground hover:text-destructive">
						<Trash2 className="h-4 w-4" />
					</button>
				</div>
			)}

			{jsonData?.length > 0 ? (
				<div
					className={`overflow-auto rounded-t-lg ${
						loading ? "animate-pulse" : ""
					}`}>
					<h3 className="font-semibold text-base bg-gray-200 p-4">
						Data Preview :
					</h3>
					<div className="overflow-scroll ">
						<table className="">
							<thead>
								<tr>
									<th>DomainID</th>
									{Object.keys(jsonData[0].issues).map((header) => (
										<th>{header}</th>
									))}
									<th>Total Score</th>
									<th>Previous Score</th>
								</tr>
							</thead>
							<tbody>
								{jsonData.map((data) => (
									<tr>
										<td>{data.domainID}</td>
										<td>{data.issues.blocker}</td>
										<td>{data.issues.critical}</td>
										<td>{data.issues.major}</td>
										<td>{data.issues.normal}</td>
										<td>{data.issues.minor}</td>
										<td>{data.score.current}</td>
										<td>{data.score.previous}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			) : (
				<div className="text-base font-semibold bg-gray-200 rounded-lg p-4">
					<p className="font-bold text-xl mb-2">Required CSV Format -</p>
					<table className="">
						<thead>
							<tr>
								{columns.map((col, i) => (
									<td key={i} className="whitespace-nowrap">
										{col}
									</td>
								))}
							</tr>
						</thead>
						<tbody>
							<tr>
								{columns.map((_, i) => (
									<td key={i} className="text-muted-foreground italic">
										{i === 0 ? "example_domain" : "0"}
									</td>
								))}
							</tr>
						</tbody>
					</table>
				</div>
			)}
			<div className="sticky bottom-0 flex justify-end bg-white">
				<button
					type="button"
					onClick={handleCsvSubmit}
					disabled={loading}
					className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-lg disabled:bg-gray-500">
					<Send size={15} />
					{loading ? "Processing..." : "Submit"}
				</button>
			</div>
		</div>
	);
};

export default CsvUpload;
