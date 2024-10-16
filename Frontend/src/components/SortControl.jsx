import { AiOutlineSortAscending } from "react-icons/ai";
import { TbSortAscending, TbSortDescending } from "react-icons/tb";

const SortControls = ({
	activeSort,
	handleSortByName,
	handleSortByScoreAsc,
	handleSortByScoreDesc,
}) => {
	return (
		<div className="px-4">
			<h3 className="font-semibold text-blue-800 text-xl mt-6 mb-2">Sort By</h3>
			<ul className="space-y-4 py-4">
				<li
					className="flex gap-2 py-2 px-4 items-center rounded-md bg-gray-200 shadow-lg cursor-pointer"
					style={{
						backgroundColor: activeSort === "Name" ? "#1e40af" : "",
						color: activeSort === "Name" ? "white" : "#1e40af",
					}}
					onClick={handleSortByName}>
					<AiOutlineSortAscending size={25} />
					Name
				</li>
				<li
					className="flex gap-2 py-2 px-4 items-center rounded-md bg-gray-200 shadow-lg cursor-pointer"
					style={{
						backgroundColor: activeSort === "High" ? "#1e40af" : "",
						color: activeSort === "High" ? "white" : "#1e40af",
					}}
					onClick={handleSortByScoreDesc}>
					<TbSortDescending size={25} />
					High to Low
				</li>
				<li
					className="flex gap-2 py-2 px-4 items-center rounded-md bg-gray-200 shadow-lg cursor-pointer"
					style={{
						backgroundColor: activeSort === "Low" ? "#1e40af" : "",
						color: activeSort === "Low" ? "white" : "#1e40af",
					}}
					onClick={handleSortByScoreAsc}>
					<TbSortAscending size={25} />
					Low to High
				</li>
			</ul>
		</div>
	);
};

export default SortControls;
