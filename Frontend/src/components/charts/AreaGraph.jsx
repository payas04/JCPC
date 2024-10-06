import React from "react";
import {
	Area,
	AreaChart,
	CartesianGrid,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const AreaGraph = ({ title, areaChartData }) => {
	return (
		<div className="w-[36%] my-auto">
			<h2 className="text-center font-semibold text-xl pb-2">{title}</h2>
			<AreaChart
				width={430}
				height={300}
				data={areaChartData}
				margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
				<defs>
					{/* <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
						<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
					</linearGradient> */}
					<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
						<stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
					</linearGradient>
					{/* <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
						<stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
					</linearGradient> */}
				</defs>
				<XAxis dataKey="name" />
				<YAxis />
				<CartesianGrid strokeDasharray="3 3" />
				<Tooltip />
				{/* <Area
					type="monotone"
					dataKey="uv"
					stroke="#8884d8"
					fillOpacity={1}
					fill="url(#colorUv)"
				/> */}
				<Area
					type="monotone"
					dataKey="uv"
					stroke="#82ca9d"
					fillOpacity={1}
					fill="url(#colorUv)"
				/>
				{/* <Area
					type="monotone"
					dataKey="pv"
					stroke="#82ca9d"
					fillOpacity={1}
					fill="url(#colorPv)"
				/> */}
			</AreaChart>
		</div>
	);
};

export default AreaGraph;
