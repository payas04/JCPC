import React from "react";
import "../../styles/activities.css";

const Selfie = ({ close }) => {
	return (
		<div className="card-details">
			<h2 className="font-bold text-4xl text-center mb-4">AI Selfie Module</h2>
			<div>
				<h4 className="font-semibold text-2xl mb-4">Task Overview</h4>
				<p className="text-lg font-normal">
					Our team has been tasked with creating a dataset of selfies to train
					an AI model. We need both portrait and landscape selfies from all team
					members, following specific guidelines to ensure consistency and
					quality in the dataset.
				</p>
				<div className="flex mt-10 justify-between  ">
					<div className="">
						<h4 className="font-semibold text-2xl mb-4">Selfie Guidelines</h4>
						<p className=" text-xl">
							Please follow these rules when taking your selfies
						</p>
						<ul className="list-disc pl-6 text-lg leading-9">
							<li>Do not wear your ID card in the selfie</li>
							<li>Ensure no one else is visible in the background</li>
							<li>Take selfies from different angles</li>
							<li>Make sure your face is clearly visible</li>
						</ul>
					</div>
					<div className="text-center">
						<h4 className="font-semibold text-2xl mb-4">Selfie Types</h4>
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
