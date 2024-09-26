import React from "react";
import {
	Area,
	AreaChart,
	CartesianGrid,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const data = [
	{
		name: "Apr 24",
		uv: 300,
		pv: 250,
		// amt: 2400,
	},
	{
		name: "May 24",
		uv: 200,
		pv: 139,
	},
	{
		name: "Jun 24",
		uv: 220,
		pv: 98,
	},
	{
		name: "Jul 24",
		uv: 278,
		pv: 390,
	},
	{
		name: "Aug 24",
		uv: 189,
		pv: 480,
	},
	{
		name: "Sep 24",
		uv: 239,
		pv: 380,
	},
];

const AreaGraph = ({ title }) => {
	return (
		<div className="w-[36%] my-auto">
			<h2 className="text-center font-semibold text-xl">{title}</h2>
			<AreaChart
				title="Jio PC issues"
				width={430}
				height={300}
				data={data}
				margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
				<defs>
					<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
						<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
					</linearGradient>
					<linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
						<stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
					</linearGradient>
				</defs>
				<XAxis dataKey="name" />
				<YAxis />
				<CartesianGrid strokeDasharray="3 3" />
				<Tooltip />
				<Area
					type="monotone"
					dataKey="uv"
					stroke="#8884d8"
					fillOpacity={1}
					fill="url(#colorUv)"
				/>
				<Area
					type="monotone"
					dataKey="pv"
					stroke="#82ca9d"
					fillOpacity={1}
					fill="url(#colorPv)"
				/>
			</AreaChart>
		</div>
	);
};

export default AreaGraph;
