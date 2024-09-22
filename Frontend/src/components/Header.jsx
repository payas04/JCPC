import React, { useEffect } from "react";
import { CiPower, CiBluetooth } from "react-icons/ci";
import { IoNotifications } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { MdVolumeUp } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
import { useLocation } from "react-router-dom";
import GetDate from "./GetDate";

const Header = () => {
	const location = useLocation();
	return (
		<div
			className="fixed top-0 w-full h-10 flex justify-between items-center px-4 text-white text-sm z-20"
			style={{
				backgroundColor:
					location.pathname == "/" ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 1)",
			}}>
			<div>
				<CiPower size={25} />
			</div>
			<div className="text-lg ">
				<GetDate />
			</div>
			<div className="flex space-x-2">
				<span>
					<GiSettingsKnobs className="rotate-90" size={25} />
				</span>
				<span>
					<IoNotifications size={25} />
				</span>
				<span>
					<MdVolumeUp size={25} />
				</span>
				<span>
					<CiBluetooth size={25} />
				</span>
				<span>
					<FaWifi size={25} />
				</span>
			</div>
		</div>
	);
};

export default Header;
