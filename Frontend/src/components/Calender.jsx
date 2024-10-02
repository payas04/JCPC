import React, { useEffect, useRef, useState } from "react";
import { GetDate } from "./GetDate";
import { useNavigate } from "react-router-dom";

const Calender = () => {
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
			className=" cursor-default bg-white bg-opacity-10 rounded-md w-[60px] h-[40px] flex justify-center items-center"
			style={{
				backgroundColor: isDropdownOpen
					? "rgba(0, 0, 0, 0.5)"
					: "rgba(255, 255, 255, 0.1)",
			}}>
			{GetDate().toLocaleDateString("en-US", {
				day: "numeric",
				month: "short",
			})}

			{isDropdownOpen && (
				<div className="absolute bottom-14 right-5 p-4 shadow rounded-lg w-60 items-center bg-neutral-800  flex flex-col">
					Calender
				</div>
			)}
		</span>
	);
};

export default Calender;
