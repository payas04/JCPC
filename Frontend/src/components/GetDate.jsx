import React, { useEffect, useState } from "react";

const GetDate = () => {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setDate(new Date());
		}, 1000); // 1000 = 1second
		return () => clearInterval(timer); // Clear interval on component unmount
	}, []);

	return (
		<div>
			{date.toLocaleString("en-US", {
				hour: "numeric",
				minute: "2-digit",
				// weekday: "long",
				day: "numeric",
				month: "short",
			})}
		</div>
	);
};

export default GetDate;
