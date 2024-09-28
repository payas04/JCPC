import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const ProfileCard = ({ name, role, imageUrl }) => {
	const [isFlipped, setisFlipped] = useState(false);
	return (
		<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
			<div
				key={name}
				onMouseEnter={() => {
					setisFlipped(true);
				}}>
				<div
					className="flex flex-col py-8 items-center gap-x-6 p-4 rounded-md"
					style={{
						backgroundImage:
							"linear-gradient(to bottom, #c1e9f2, #b4e2ef, #a7dced, #9ad5eb, #8ecee9)",
					}}>
					<img alt="" src={imageUrl} className="h-16 w-16 rounded-full" />
					<div>
						<h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
							{name}
						</h3>
						<p className="text-sm font-semibold leading-6 text-indigo-600">
							{role}
						</p>
						<p className="text-center text-sm font-semibold text-green-800">
							140 Issue Score
						</p>
					</div>
				</div>
			</div>
			<div
				key={name}
				onMouseLeave={() => {
					setisFlipped(false);
				}}>
				<div
					className="flex flex-col py-8 items-center gap-x-6 p-4 rounded-md"
					style={{
						backgroundImage:
							"linear-gradient(to bottom, #c1e9f2, #b4e2ef, #a7dced, #9ad5eb, #8ecee9)",
					}}>
					<img alt="" src={imageUrl} className="h-16 w-16 rounded-full" />
					<div>
						<h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
							Back sid of the card
						</h3>
						<p className="text-sm font-semibold leading-6 text-indigo-600">
							{role}
						</p>
						<p className="text-center text-sm font-semibold text-green-800">
							Yoo whats good
						</p>
					</div>
				</div>
			</div>
		</ReactCardFlip>
	);
};

export default ProfileCard;
