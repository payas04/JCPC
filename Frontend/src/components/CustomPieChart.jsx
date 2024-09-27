import { PieChart } from "@mui/x-charts/PieChart";

export default function CustomPieChart({
  blocker,
  critical,
  major,
  normal,
  minor,
}) {
  return (
    <PieChart
      colors={["#D91656", "orange", "yellow", "blue", "green"]}
      series={[
        {
          data: [
            { id: 0, value: blocker || 50, label: "Blocker", color: "#C40C0C" },
            {
              id: 1,
              value: critical || 69,
              label: "Critical",
              color: "#E85C0D",
            },
            { id: 2, value: major || 50, label: "Major", color: "#FABC3F" },
            { id: 3, value: normal || 69, label: "Normal", color: "#87A2FF" },
            { id: 4, value: minor || 50, label: "Minor", color: "green" },
          ],
          highlightScope: { fade: "global", highlight: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
        },
      ]}
      width={430}
      height={250}
    />
  );
}
