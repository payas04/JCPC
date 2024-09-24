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
      colors={["red", "orange", "yellow", "blue", "green"]}
      series={[
        {
          data: [
            { id: 0, value: blocker || 50, label: "Blocker", color: "red" },
            {
              id: 1,
              value: critical || 69,
              label: "Critical",
              color: "orange",
            },
            { id: 2, value: major || 50, label: "Major", color: "yellow" },
            { id: 3, value: normal || 69, label: "Normal", color: "#87A2FF" },
            { id: 4, value: minor || 50, label: "Minor", color: "green" },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}
