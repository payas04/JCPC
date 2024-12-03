import Draggable from "react-draggable";
import { useNavigate } from "react-router-dom";
import { MdShortcut } from "react-icons/md";
import { useAuth } from "../context/auth";
import { useCallback, useState } from "react";
import Browser from "./Browser";
import Slider from "./Slider";

export default function Home() {
	const navigate = useNavigate();
	const [fadeOut, setFadeOut] = useState(false);
	const { isShutdown, setIsShutdown, logout, isChromeOpen, setChromeOpen } =
		useAuth();

	const [selectedIcon, setSelectedIcon] = useState(null);

	const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1920;
	const screenHeight =
		typeof window !== "undefined" ? window.innerHeight : 1080;
	const bounds = {
		left: 0,
		top: 0,
		right: screenWidth - 1128,
		bottom: screenHeight - 624,
	};

	const [isMenuOpen, setIsMenuOpen] = useState(true);

	// Use useCallback to memoize the function and avoid unnecessary re-renders
	const toggleMenu = useCallback(() => {
		setIsMenuOpen((prev) => !prev);
	}, []);

	function handleFadeOutClick() {
		setIsShutdown(false);
		setFadeOut(true);
		setTimeout(() => {
			setFadeOut(false);
		}, 1000);
		logout();
		navigate("/");
	}

	const handleIconClick = useCallback((iconName, event) => {
		event.stopPropagation();
		setSelectedIcon(iconName);
	}, []);

	const handleBackgroundClick = useCallback(() => {
		setSelectedIcon(null);
	}, []);

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
							src="/images/ChromeOS_Logo.png"
							alt="Random"
							className="w-full object-cover rounded-lg shadow-lg"
						/>
					</div>
				</>
			)}
			<div
				className="w-screen h-screen text-white font-normal  bg-gradient-to-r from-red-500 via-orange-400 to-pink-600"
				onClick={handleBackgroundClick}>
				<Browser
					isAppOpen={isChromeOpen}
					toggleBrowser={() => setChromeOpen(!isChromeOpen)}
					bounds={bounds}
				/>
				<Draggable bounds="parent" defaultPosition={{ x: 25, y: 60 }}>
					<div
						className={`w-28 h-28 pt-1 text-center cursor-pointer rounded-lg ${
							selectedIcon === "JioCloudPC"
								? "bg-blue-500  bg-opacity-50 "
								: "hover:bg-white/20 "
						}`}
						onClick={(e) => handleIconClick("JioCloudPC", e)}
						onDoubleClick={() => {
							navigate("/accops/dashboard");
						}}>
						<img
							src="/images/icons/JioCloudPc.png"
							alt="JioCloudPc logo"
							className="w-[50px] h-[50px] rounded-lg block mx-auto mb-3"
						/>
						<MdShortcut className="absolute top-10 left-5 bg-blue-600 rounded-sm w-5" />
						JioCloudPC
					</div>
				</Draggable>
				<Draggable defaultPosition={{ x: 25, y: 90 }}>
					<div
						className={`w-28 h-28 pt-1 text-center cursor-pointer rounded-lg  ${
							selectedIcon === "Devops"
								? "bg-blue-500  bg-opacity-50 "
								: "hover:bg-white/20"
						}`}
						onClick={(e) => handleIconClick("Devops", e)}
						onDoubleClick={() => {
							window.open(`${import.meta.env.VITE_DEVOPS_LINK}`, "_blank");
						}}>
						<img
							src="/images/icons/Devops.webp"
							alt="Devops logo"
							className="w-[50px] h-[50px] rounded-lg block mx-auto mb-3"
						/>
						<MdShortcut className="absolute top-10 left-5 bg-blue-600 rounded-sm w-5" />
						Azure Devops
					</div>
				</Draggable>
				<Draggable defaultPosition={{ x: 25, y: 120 }}>
					<div
						className={`w-28 h-28 pt-1 text-center cursor-pointer rounded-lg ${
							selectedIcon === "Chrome"
								? "bg-blue-500  bg-opacity-50"
								: "hover:bg-white/20"
						}`}
						onClick={(e) => handleIconClick("Chrome", e)}
						onDoubleClick={() => {
							setChromeOpen(true);
						}}>
						<img
							src="/images/icons/Chrome.png"
							alt="Chrome logo"
							className="w-[50px] h-[50px] rounded-lg block mx-auto mb-3"
						/>
						<MdShortcut className="absolute top-10 left-5 bg-blue-600 rounded-sm w-5" />
						Chrome
					</div>
				</Draggable>
				<img
					src="/images/logo/JioCloudPC.svg"
					alt="JioCloudPC logo"
					width={500}
					className="absolute right-16 top-32 opacity-80"
				/>
			</div>
			{/* <Slider
				isMenuOpen={isMenuOpen}
				setIsMenuOpen={setIsMenuOpen}
				toggleMenu={toggleMenu}
			/> */}
		</>
	);
}
