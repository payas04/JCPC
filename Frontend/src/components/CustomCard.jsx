import { CardContainer, CardItem } from "../components/ui/3d-card";
import { useState } from "react";
import UserModal from "./modals/UserModal";

export default function CustomCard({ user, allUsers }) {
	const [isOpen, setIsOpen] = useState(false);
	const handleOpenModal = (e) => {
		e.stopPropagation();
		setIsOpen(true);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
	};

	return (
		<>
			<div
				onClick={handleOpenModal}
				className="group bg-[#F8F9FA] rounded-lg border cursor-pointer shadow-lg transition-all duration-300  hover:-translate-y-2 hover:bg-blue-300">
				<CardContainer className="flex flex-col w-full justify-center mx-2 my-4 text-center  ">
					<CardItem
						translateZ="60"
						className="flex flex-col justify-center items-center w-full">
						<img
							alt={user.name}
							className="w-24 h-24 mb-4 object-cover rounded-full ring-2 ring-blue-800 ring-offset-2 transition-all duration-300 group-hover:ring-4 bg-white "
							src={user.image}
							onError={(e) => {
								e.target.src = "/images/profile/default.png";
							}}
						/>

						<span className="text-lg flex flex-col font-semibold leading-tight">
							{user && user.name}
						</span>
						<span
							className={` text-sm font-semibold ${
								user.tag === "Released" ? "text-gray-500" : "text-blue-800"
							} `}>
							{user.tag}
						</span>
						<div className="mt-4 bg-blue-800 text-white rounded-full px-3 py-1 text-sm font-medium w-fit self-center duration-700">
							Score: {user.score.current}
						</div>
					</CardItem>
				</CardContainer>
			</div>
			{isOpen && (
				<UserModal
					open={isOpen}
					setOpen={handleCloseModal}
					initialUser={user}
					users={allUsers} // Pass all users for carousel functionality
				/>
			)}
		</>
	);
}
