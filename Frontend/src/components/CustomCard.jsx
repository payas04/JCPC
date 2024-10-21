import { CardContainer, CardItem } from "../components/ui/3d-card";
import { useState } from "react";
import UserModal from "./UserModal";

export default function CustomCard({ user, shouldOpenModal = false }) {
	const [open, setOpen] = useState(false);
	const handleOpenModal = () => {
		console.log(open);
		if (!shouldOpenModal) {
			setOpen(true);
		}
	};

	return (
		<div
			onClick={handleOpenModal}
			className="group bg-[#F8F9FA] rounded-lg border cursor-pointer shadow-lg transition-all duration-300  hover:-translate-y-2 hover:bg-blue-300">
			<UserModal open={open} setOpen={setOpen} user={user} />

			<CardContainer className="flex flex-col w-full justify-center mx-2 my-4 text-center  ">
				<CardItem
					translateZ="60"
					className="flex flex-col justify-center items-center w-full">
					<img
						alt={user.Name}
						className="w-24 h-24 mb-4 object-contain rounded-full ring-2 ring-blue-800 ring-offset-2 transition-all duration-300 group-hover:ring-4 bg-white "
						src={`/images/members/${user.Domain}.jpg`}
						onError={(e) => {
							e.target.src = "/images/profile/default.png";
						}}
					/>

					<span className="text-lg flex flex-col font-semibold leading-tight">
						{user && user.Name}
					</span>
					<span
						className={` text-sm font-semibold ${
							user.Tags === "Released" ? "text-gray-500" : "text-blue-800"
						} `}>
						{user.Tags}
					</span>
					<div className="mt-4 bg-blue-800 text-white rounded-full px-3 py-1 text-sm font-medium w-fit self-center duration-700">
						Score: {user.Total_score}
					</div>
				</CardItem>
			</CardContainer>
		</div>
	);
}
