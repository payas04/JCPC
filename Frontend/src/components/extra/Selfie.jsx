import React from "react";
import "../../styles/activities.css";
import BarGraph from "../charts/BarGraph";
import { selfieBarData } from "../../db/data";

const Selfie = ({ close }) => {
	return (
		<div className="card-details">
			<h2 className="font-bold text-4xl text-center mb-4">AI Selfie Module</h2>
			<div>
				<h4 className="font-bold text-2xl mb-4">Task Overview</h4>
				<p className="text-lg font-semibold">
					Our team successfully completed the task of creating a dataset of
					selfies, generating a total over 3,000 selfies in both portrait and
					landscape orientations. The following are the detailed statistics of
					the work completed.
				</p>
				<div className="flex mt-10 justify-between  ">
					<div className="text-center">
						<h4 className="font-bold text-2xl mb-4">Task Statistics</h4>
						<BarGraph barData={selfieBarData} />
					</div>
					<div className="text-center">
						<h4 className="font-bold text-2xl mb-4">Selfie Types</h4>
						<div className="flex gap-4">
							<div className="w-1/2">
								<img
									src="/images/extra/portrait.jpg"
									alt="Portrait Image"
									width={200}
									srcset=""
									className=" mx-auto"
								/>
								<p className="font-semibold">Portrait Selfie</p>
							</div>
							<div className="w-1/2">
								<img
									src="/images/extra/Landscape.png"
									alt="Landscape Image"
									srcset=""
									width={200}
								/>
								<p className="font-semibold">Landscape Selfie</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<button className="close-btn" onClick={close}>
				&times;
			</button>
		</div>
	);
};

export default Selfie;
