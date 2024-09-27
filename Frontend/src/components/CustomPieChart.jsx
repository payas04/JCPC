import { PieChart } from "@mui/x-charts/PieChart";

export default function CustomPieChart({
	data
}) {
	return (
		<PieChart
			colors={["#D91656", "orange", "yellow", "blue", "green"]}
			series={[
				{
					data,
				},
			]}
			width={430}
			height={200}
		/>
	);
}
