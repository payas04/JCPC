import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegCircle } from "react-icons/fa";
import { GoMoon } from "react-icons/go";
import { IoPower } from "react-icons/io5";
import { VscDebugRestart } from "react-icons/vsc";
import { useAuth } from "../context/auth";

function Power() {
	const navigate = useNavigate();
	const { logout, setIsShutdown } = useAuth();
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	function toggleDropdown() {
		setIsDropdownOpen(!isDropdownOpen);
	}

	function handleSleep() {
		logout();
		navigate("/");
	}

	function handleShut() {
		setIsShutdown(true);
		// setTimeout(() => {}, 2700);
	}

	return (
		<span
			className="cursor-pointer rounded-full w-[40px] h-[40px] flex justify-center items-center"
			style={{
				backgroundColor: isDropdownOpen
					? "rgba(0, 0, 0, 0.5)"
					: "rgba(255, 255, 255, 0.1)",
			}}>
			<div
				className="flex justify-center items-center"
				style={{}}
				onClick={toggleDropdown}>
				<FaRegCircle size={20} />
			</div>
			{isDropdownOpen && (
				<ul className="absolute bottom-14 left-3 p-2 shadow rounded-lg w-40 bg-neutral-800 border-black border-2 border-opacity-10 flex flex-col gap-3">
					<li>
						<button
							className="flex gap-2 justify-center items-center"
							onClick={handleSleep}>
							<GoMoon /> Sleep
						</button>
					</li>
					<li>
						<button
							className="flex gap-2 justify-center items-center"
							onClick={handleShut}>
							<IoPower /> Shut Down
						</button>
					</li>
					<li>
						<button
							className="flex gap-2 justify-center items-center"
							// onClick={ }
						>
							<VscDebugRestart /> Restart
						</button>
					</li>
				</ul>
			)}
		</span>
	);
}

export default Power;
