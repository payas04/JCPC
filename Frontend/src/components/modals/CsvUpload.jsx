import { Send } from "lucide-react";
import { useRef, useState } from "react";
import Papa from "papaparse";

const CsvUpload = () => {
	const [jsonData, setJsonData] = useState(null);
	const fileInputRef = useRef(null);

	const transformData = (data) => {
		return data
			.filter((item) => {
				// Filter out entries with empty DomainID or where all scores are 0
				const hasValidDomain = item.DomainID && item.DomainID.trim() !== "";
				const hasNonZeroScores =
					parseInt(item["score.blocker"] || 0) > 0 ||
					parseInt(item["score.critical"] || 0) > 0 ||
					parseInt(item["score.major"] || 0) > 0 ||
					parseInt(item["score.normal"] || 0) > 0 ||
					parseInt(item["score.minor"] || 0) > 0;

				return hasValidDomain || hasNonZeroScores;
			})
			.map((item) => {
				// Create a new object to hold transformed data
				const transformedItem = {
					domainId: (item.DomainID || "").trim(),
					totalScore: (item.total || 0).trim(),
				};

				// Create a nested score object
				transformedItem.score = {
					blocker: parseInt(item["score.blocker"] || 0),
					critical: parseInt(item["score.critical"] || 0),
					major: parseInt(item["score.major"] || 0),
					normal: parseInt(item["score.normal"] || 0),
					minor: parseInt(item["score.minor"] || 0),
				};

				return transformedItem;
			});
	};

	const handleFileUpload = (e) => {
		const file = e.target.files[0];

		Papa.parse(file, {
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
	};

	const clearFileInput = () => {
		if (fileInputRef.current) {
			fileInputRef.current.value = ""; // Clear the input
			setJsonData(null);
		}
	};

	return (
		<div className="p-4 space-y-2">
			<h2 className="font-semibold text-lg ">Upload CSV File</h2>
			<div className="flex">
				<input
					type="file"
					accept=".csv"
					ref={fileInputRef}
					className=""
					onChange={handleFileUpload}
				/>
				<button
					className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-lg"
					type="button"
					onClick={clearFileInput}>
					Clear
				</button>
			</div>
			{jsonData?.length > 0 ? (
				<div className="overflow-auto">
					<h3 className="font-semibold mb-2">Data Preview :</h3>
					<div className="overflow-scroll">
						<table>
							<thead>
								<tr>
									<th>DomainID</th>
									{Object.keys(jsonData[0].score).map((header) => (
										<th>{header}</th>
									))}
									<th>Total Score</th>
								</tr>
							</thead>
							<tbody>
								{jsonData.map((data) => (
									<tr>
										<td>{data.domainId}</td>
										<td>{data.score.blocker}</td>
										<td>{data.score.critical}</td>
										<td>{data.score.major}</td>
										<td>{data.score.normal}</td>
										<td>{data.score.minor}</td>
										<td>{data.totalScore}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			) : (
				<p>No Data Preview available</p>
			)}
			<div className="flex justify-end">
				<button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-lg">
					<Send size={15} />
					Submit
				</button>
			</div>
		</div>
	);
};

export default CsvUpload;
