import Draggable from "react-draggable";
import Logo from "../assets/JioCloudPC.png";
import { useNavigate } from "react-router-dom";
import { MdShortcut } from "react-icons/md";
import { useAuth } from "../context/auth";
import { useState } from "react";
import Browser from "./Browser";

const Home = () => {
	const navigate = useNavigate();
	const [fadeOut, setFadeOut] = useState(false);
	const { isShutdown, setIsShutdown, logout } = useAuth();

	const [isChromeOpen, setChromeOpen] = useState(false);
	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight;
	const bounds = {
		left: 0,
		top: 0,
		right: screenWidth - 1128,
		bottom: screenHeight - 624,
	};

	function handleFadeOutClick() {
		setIsShutdown(false);
		setFadeOut(true);
		setTimeout(() => {
			setFadeOut(false);
		}, 1000);
		logout();
		navigate("/");
	}

	return (
		<>
			{isShutdown && (
				<>
					<audio src="/audio/shutdown.mp3" autoPlay />
					<div
						className={`fixed top-0 left-0 w-full h-full text-center grid place-content-center bg-black transition-opacity duration-1000 ease-in-out ${
							fadeOut ? "opacity-0" : "opacity-100"
						} z-50`}
						onClick={handleFadeOutClick}>
						<img
							src="/images/ChromeOS_Logo.svg.png"
							alt="Random"
							className="w-full object-cover rounded-lg shadow-lg"
						/>
					</div>
				</>
			)}
			<div className="w-full text-white font-normal h-full bg-gradient-to-r from-red-500 via-orange-400 to-pink-600">
				<Browser
					isAppOpen={isChromeOpen}
					toggleBrowser={() => setChromeOpen(!isChromeOpen)}
					bounds={bounds}
				/>
				<Draggable bounds="parent" defaultPosition={{ x: 25, y: 60 }}>
					<div
						className="w-[100px] h-[85px] text-center"
						onDoubleClick={() => {
							navigate("/accops/dashboard");
						}}>
						<img
							src={Logo}
							alt="JioCloudPc logo"
							className="w-[50px] h-[50px] rounded-lg block mx-auto mb-3 "
						/>
						<MdShortcut className="absolute top-10 left-4 bg-blue-600 rounded-sm w-5" />
						JioCloudPC
					</div>
				</Draggable>
				<Draggable
					defaultPosition={{
						x: 25,
						y: 90,
					}}>
					<div
						className="w-[100px] text-white h-[85px] text-center"
						onDoubleClick={() => {
							setChromeOpen(true);
						}}>
						<img
							src={"/images/Chrome.png"}
							alt="Chrome logo"
							className="w-[50px] h-[50px] rounded-lg block  mx-auto mb-3 "
						/>
						Chrome
					</div>
				</Draggable>
			</div>
		</>
	);
};

export default Home;
