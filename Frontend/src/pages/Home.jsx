import React from "react";
import Draggable from "react-draggable";
import Logo from "../assets/JioCloudPC.png";

const Home = () => {
	const handleDrag = (e, position) => {
		const { x, y } = position;
		console.log(`Current position: X: ${x}, Y: ${y}`);
	};
	return (
		<div className="w-full h-full bg-gradient-to-r from-red-500 via-orange-400 to-pink-600">
			<Draggable
				bounds="parent"
				onDrag={handleDrag}
				defaultPosition={{ x: 25, y: 60 }}>
				<div className="w-[100px] h-[85px] cursor-move text-center">
					<img
						src={Logo}
						alt="JioCloudPc logo"
						className="w-[50px] h-[50px] rounded-lg block mx-auto mb-3"
					/>
					JioCloudPC
				</div>
			</Draggable>
			<Draggable
				bounds="parent"
				onDrag={handleDrag}
				defaultPosition={{ x: 25, y: 60 }}>
				<div className="w-[100px] h-[85px] cursor-move text-center">
					<img
						src={Logo}
						alt="JioCloudPc logo"
						className="w-[50px] h-[50px] rounded-lg block mx-auto mb-3"
					/>
					JioCloudPC
				</div>
			</Draggable>
		</div>
	);
};

export default Home;
