import { PieChart } from "@mui/x-charts/PieChart";

export default function CustomPieChart({ data, radiusValue }) {
	return (
		<PieChart
			colors={["#D91656", "orange", "yellow", "blue", "green"]}
			series={[
				{
					data,
					highlightScope: { fade: "global", highlight: "item" },
					faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
					innerRadius: radiusValue,
				},
			]}
			width={430}
			height={250}
		/>
	);
	// >>>>>>> 733f1b80820e6d2ff42258f540dc8e50e14297c2
}
