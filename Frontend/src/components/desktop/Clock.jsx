import React, { useEffect, useRef, useState } from "react";
import { MdOutlineBatteryFull, MdOutlineSignalWifi4Bar } from "react-icons/md";
import { GetDate } from "../GetDate";
import { AnalogClock } from "@hoseinh/react-analog-clock";
import { useNavigate } from "react-router-dom";

const Clock = () => {
	const navigate = useNavigate();
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);

	useEffect(() => {
		function handleClickOutside(event) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsDropdownOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	function toggleDropdown() {
		setIsDropdownOpen(!isDropdownOpen);
	}

	return (
		<span
			ref={dropdownRef}
			onClick={toggleDropdown}
			className=" cursor-pointer bg-white bg-opacity-10 rounded-md w-fit px-2 flex justify-center items-center space-x-2"
			style={{
				backgroundColor: isDropdownOpen
					? "rgba(0, 0, 0, 0.5)"
					: "rgba(255, 255, 255, 0.1)",
			}}>
			<p>
				{GetDate().toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
					hour12: false,
				})}
			</p>
			<p>US</p>

			{isDropdownOpen && (
				<div className="absolute bottom-14 right-5 p-4 shadow rounded-lg w-60 items-center bg-neutral-800  flex flex-col">
					<AnalogClock
						showMinuteHand={true}
						showSecondHand={true}
						showBorder={true}
						showHandBase={true}
						smooth={false}
						whiteNumbers={false}
						square={false}
						numbersType="numbersAndLines"
						borderColor="#000000"
						handBaseColor="#000000"
						handColor={{
							hour: "#000000",
							minute: "#000000",
							second: "#e74c3c",
						}}
						handLength={{ hour: "65px", minute: "90px", second: "90px" }}
						handThickness={{ hour: "2px", minute: "2px", second: "2px" }}
						size="200px"
						backgroundColor="#ffffff"
					/>
				</div>
			)}
		</span>
	);
};

export default Clock;
