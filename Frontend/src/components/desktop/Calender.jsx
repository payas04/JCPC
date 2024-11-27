import { useEffect, useRef, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { GetDate } from "../GetDate";

export default function Calender() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);
	const calendarRef = useRef(null);

	useEffect(() => {
		function handleClickOutside(event) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target) &&
				calendarRef.current &&
				!calendarRef.current.contains(event.target)
			) {
				setIsDropdownOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	function toggleDropdown(event) {
		event.stopPropagation();
		setIsDropdownOpen(!isDropdownOpen);
	}

	return (
		<span
			ref={dropdownRef}
			onClick={toggleDropdown}
			className=" cursor-pointer bg-white bg-opacity-10 rounded-md w-[60px] h-[40px] flex justify-center items-center relative"
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
				<div
					ref={calendarRef}
					className="absolute bottom-14 right-1  p-4 shadow rounded-lg  bg-white text-black flex flex-col"
					onClick={(e) => e.stopPropagation()}>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DateCalendar />
					</LocalizationProvider>
				</div>
			)}
		</span>
	);
}
