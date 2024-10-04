import React from "react";
import "../../styles/activities.css";

const OsResearch = ({ close }) => {
	return (
		<div className="card-details">
			<h2 className="font-bold text-4xl text-center mb-4">OS Research</h2>
			<img
				src="/images/extra/OS_Image.png"
				alt="OS Research Image"
				srcset=""
				className="object-contain"
				loading="lazy"
			/>
			<button className="close-btn" onClick={close}>
				&times;
			</button>
		</div>
	);
};

export default OsResearch;
