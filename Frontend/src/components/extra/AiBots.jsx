import React from "react";

const AiBots = ({ close }) => {
	return (
		<div className="card-details">
			<h2 className="font-bold text-4xl text-center mb-4">
				AI Bot (Managed WiFi Solutions)
			</h2>
			<p>Lorem ipsum dolor sit amet...</p>
			<button className="close-btn" onClick={close}>
				&times;
			</button>
		</div>
	);
};

export default AiBots;
