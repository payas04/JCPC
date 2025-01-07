import { pieArcLabelClasses, PieChart } from "@mui/x-charts/PieChart";
import { Box, Typography } from "@mui/material";
import { ResponsiveChartContainer } from "@mui/x-charts";

export default function CustomPieChart({ data, radiusValue, label, legend }) {
  return (
    <Box position="relative" display="inline-block">
      <PieChart
        series={[
          {
            data,
            arcLabel: label ? (item) => `${item.value}` : "",
            arcLabelMinAngle: 1,
            arcLabelRadius: "60%",
            cx: "40%",
            highlightScope: { fade: "global", highlight: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            innerRadius: radiusValue,
          },
        ]}
        slotProps={{ legend: { hidden: legend ? true : false } }}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "white",
            fontSize: 14,
          },
        }}
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
            left: "31%",
            transform: "translate(-50%, -50%)",
            fontWeight: 700,
            pointerEvents: "none", // Ensures the label doesn’t interfere with pie chart interaction
          }}
        >
          {data.reduce((acc, item) => acc + item.value, 0)}
        </Typography>
      )}
    </Box>
  );
}
