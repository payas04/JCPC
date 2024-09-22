import React from "react";
import { MdWindow } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { BiSolidWidget } from "react-icons/bi";
import { FaTrashCan } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";
import JioCloudLogo from "../assets/JioCloudPC.png";

const Footer = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const JioCloudPath = location.pathname.startsWith("/accops");
	return (
		<div className="fixed bottom-0 w-full h-12 bg-black flex justify-between items-center space-x-6 px-3 z-10">
			<div className="flex gap-4">
				<MdWindow
					className="cursor-pointer"
					size={30}
					onClick={() => {
						navigate("/");
					}}
				/>
				<RiCheckboxMultipleBlankFill className="cursor-pointer" size={30} />
				<FaSearch className="cursor-pointer" size={30} />
				<MdKeyboardArrowLeft className="cursor-pointer" size={30} />
			</div>
			<div className="flex gap-4 justify-center items-center">
				<span
					className="text-white text-2xl cursor-pointer p-1 rounded-sm border-white"
					style={{
						borderBottomWidth: JioCloudPath ? 2 : 0,
					}}
					onClick={() => {
						if (JioCloudPath) navigate("/");
						else navigate("/accops/dashboard");
					}}>
					<img
						src={JioCloudLogo}
						alt="JioCloudPc logo"
						className="w-[30px] h-full rounded-lg block mx-auto"
					/>
				</span>
				<span className="text-white text-2xl">⚙️</span>
			</div>
			<div className="flex gap-4">
				<FaTrashCan className="cursor-pointer" size={30} />
				<BiSolidWidget className="cursor-pointer" size={30} />
			</div>
		</div>
	);
};

export default Footer;
