import { CardContainer, CardItem } from "../components/ui/3d-card";
import { useState } from "react";
import UserModal from "./UserModal";

export function CustomCard({ user, shouldOpenModal = false }) {
	const [open, setOpen] = useState(false);
	const handleOpenModal = () => {
		console.log(open);
		if (!shouldOpenModal) {
			setOpen(true);
		}
	};

	return (
		<div onClick={handleOpenModal} className="scrollAnimation">
			<UserModal open={open} setOpen={setOpen} user={user} />

			<CardContainer className="flex flex-col mx-auto w-full justify-center m-8 text-center">
				<CardItem translateZ="60">
					<img
						alt=""
						className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
						src="/images/Binit.jpg"
					/>
				</CardItem>

				<CardItem
					translateZ="60"
					className="text-black  text-lg max-w-sm   text-center font-semibold">
					<span className="text-xl flex flex-col font-semibold leading-tight">
						{user && user.Name}
					</span>
					<span className="dark:text-gray-600">@developer</span>
					<div className="text-green-600">{user.score}</div>
				</CardItem>
			</CardContainer>
		</div>
	);
}
