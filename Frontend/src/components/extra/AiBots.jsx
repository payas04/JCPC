import React from "react";

const AiBots = ({ close }) => {
	return (
		<div className="card-details">
			<h2 className="font-bold text-4xl text-center mb-4">
				AI Bot (Managed WiFi)
			</h2>
			<div>
				<h4 className="font-bold text-2xl mb-4">Task Overview</h4>
				<p className="text-lg font-semibold">
					Our team successfully completed the task of creating distinct
					questions related to WiFi, simulating how users would naturally
					interact with an AI bot regarding WiFi issues, queries, or services.
					We generated over 900 indents that reflect two user segments.
				</p>
				<div className="flex mt-10 justify-between  ">
					<div className="">
						<h4 className="font-bold text-center text-2xl mb-4">
							Non-Technical Users
						</h4>
						<ul className="list-disc pl-6 text-lg font-semibold leading-6">
							<li>These users would ask simple, basic questions about WiFi</li>
							<li>
								They might be confused or unsure about technical terms and rely
								on plain language
							</li>
						</ul>
					</div>
					<div className="">
						<h4 className="font-bold text-center text-2xl mb-4">
							Semi-Technical users
						</h4>
						<ul className="list-disc pl-6 text-lg font-semibold leading-6">
							<li>
								These users might be slightly familiar with WiFi concepts but
								may not know advanced details
							</li>
							<li>They might use basic tech terms but need more guidance.</li>
						</ul>
					</div>
				</div>
			</div>
			<button className="close-btn" onClick={close}>
				&times;
			</button>
		</div>
	);
};

export default AiBots;
