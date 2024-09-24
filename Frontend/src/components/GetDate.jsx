import React, { useEffect, useState } from "react";

export function GetDate() {
	const [date, setDate] = useState(new Date());
	useEffect(() => {
		const timer = setInterval(() => {
			setDate(new Date());
		}, 1000); // 1000 = 1second
		return () => clearInterval(timer); // Clear interval on component unmount
	}, []);

	return date;
}
