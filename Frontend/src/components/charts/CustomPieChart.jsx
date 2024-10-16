import { PieChart } from "@mui/x-charts/PieChart";
import { Box, Typography } from "@mui/material";

export default function CustomPieChart({ data, radiusValue, innerLabel }) {
	return (
		<Box position="relative" display="inline-block">
			<PieChart
				series={[
					{
						data,
						arcLabel: (item) => `${item.value}`,
						arcLabelMinAngle: 1,
						arcLabelRadius: "60%",
						highlightScope: { fade: "global", highlight: "item" },
						faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
						innerRadius: radiusValue,
					},
				]}
				width={430}
				height={250}
			/>
			{/* Inner circle text */}
			{radiusValue && (
				<Typography
					variant="h6"
					component="div"
					sx={{
						position: "absolute",
						top: "50%",
						left: "39%",
						transform: "translate(-50%, -50%)",
						fontWeight: 700,
						pointerEvents: "none", // Ensures the label doesn’t interfere with pie chart interaction
					}}>
					{data.reduce((acc, item) => acc + item.value, 0)}
				</Typography>
			)}
		</Box>
	);
}
