import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { LuListMusic } from "react-icons/lu";
import { PiNumberCircleTwoFill } from "react-icons/pi";
import Power from "./Power";
import Clock from "./desktop/Clock";
import Calender from "./desktop/Calender";
import { MdOutlineBatteryFull, MdOutlineSignalWifi4Bar } from "react-icons/md";
import { useAuth } from "../context/auth";
import { Tooltip } from "@mui/material";

const Footer = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const JioCloudPath = location.pathname.startsWith("/accops");
	const ChromePath = location.pathname.startsWith("/chrome");
	const { isChromeOpen, setChromeOpen } = useAuth();

	return (
		<div
			className="fixed bottom-0 w-full h-12 rounded-t-3xl justify-between items-center text-white space-x-6 px-1 z-40"
			style={{
				backgroundColor: JioCloudPath
					? "rgba(0, 0, 0, 1)"
					: "rgba(0, 0, 0, 0.5)",
				display: location.pathname == "/" ? "none" : "flex",
			}}>
			<Power />
			<div className="flex gap-4 justify-center items-center">
				<span className="cursor-default bg-white bg-opacity-10 rounded-full w-[80px] h-[35px] flex justify-center items-center">
					Desk 1
				</span>
				<span
					className="text-white text-2xl cursor-pointer p-1 rounded-sm border-white"
					style={{
						borderBottomWidth: JioCloudPath ? 2 : 0,
					}}
					onClick={() => {
						if (JioCloudPath) navigate("/home");
						else navigate("/accops/dashboard");
					}}>
					<img
						src="/images/icons/JioCloudPc.png"
						alt="JioCloudPc logo"
						className="w-[30px] h-full rounded-lg block mx-auto"
					/>
				</span>
				<span
					className="text-white text-2xl cursor-pointer p-1 rounded-sm border-white"
					style={{
						borderBottomWidth: isChromeOpen ? 2 : 0,
					}}
					onClick={() => setChromeOpen(!isChromeOpen)}>
					<img
						src="/images/icons/Chrome.png"
						alt="Chrome logo"
						className="w-[30px] h-full rounded-lg block mx-auto"
					/>
				</span>
			</div>

			<div className="flex gap-1">
				<Tooltip title="Work In Progress">
					<span className=" bg-white bg-opacity-10 rounded-s-3xl rounded-md w-[40px] h-[40px] flex justify-center items-center">
						<LuListMusic size={20} />
					</span>
				</Tooltip>
				<Tooltip title="File downloading...">
					<span className=" bg-white bg-opacity-10 rounded-md w-[70px] h-[40px] flex justify-center items-center gap-1 px-5">
						<FaArrowAltCircleUp
							size={20}
							className="min-w-[20px] min-h-[20px]"
						/>
						<PiNumberCircleTwoFill
							size={50}
							className="min-w-[23px] min-h-[20px]"
						/>
					</span>
				</Tooltip>
				<Calender />
				<Clock />
				<Tooltip title="Make sure to connect your Wifi and keep your battery full">
					<span className=" bg-white bg-opacity-10 rounded-md rounded-e-3xl w-fit flex justify-center items-center gap-1 px-2">
						<MdOutlineSignalWifi4Bar size={20} />
						<MdOutlineBatteryFull size={20} />
					</span>
				</Tooltip>
			</div>
		</div>
	);
};

export default Footer;
