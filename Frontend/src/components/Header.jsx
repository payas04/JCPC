import React from "react";
import { CiPower, CiBluetooth } from "react-icons/ci";
import { IoNotifications } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { MdVolumeUp } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";

const Header = () => {
	return (
		<div className="fixed top-0 w-full h-10 bg-black bg-opacity-30 flex justify-between items-center px-4 text-white text-sm z-20">
			<div>
				<CiPower size={25} />
			</div>
			<div className="text-lg ">15:16 23 Jul</div>
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
