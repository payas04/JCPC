import React from "react";
import {
	BarChart,
	Bar,
	Rectangle,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const BarGraph = ({ barData }) => {
	return (
		<div>
			<BarChart
				width={500}
				height={300}
				data={barData}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar
					dataKey="Portrait"
					fill="#1e40af"
					// activeBar={<Rectangle fill="pink" stroke="blue" />}
				/>
				<Bar
					dataKey="Landscape"
					fill="#82ca9d"
					// activeBar={<Rectangle fill="gold" stroke="purple" />}
				/>
			</BarChart>
		</div>
	);
};

export default BarGraph;
