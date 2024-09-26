import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
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
			<CardContainer className="mb-10 h-60 mx-auto mt-8">
				<CardBody className="card h-52 w-60 border px-2 mx-2 rounded-lg flex-col flex items-center text-black bg-[#F1EDFF] shadow-xl hover:shadow">
					{/* bg-gradient-to-br from-[#92d1f8] to-[#bbedff] */}
					<CardItem translateZ="64" className="w-full">
						{/* Image */}
						<img
							className="mx-auto -mt-36 w-36 rounded-full border-8 border-white outline-none "
							alt="thumbnail"
							src="/images/Binit.jpg"
						/>
					</CardItem>
					{/* Info */}
					<CardItem
						translateZ="60"
						className="text-black text-lg max-w-sm mt-2 text-center font-semibold">
						<div className="flex flex-col justify-center items-center">
							<span className="font-bold text-xl">{user && user.Name}</span>
							<span className="font-thin text-lg">@developer</span>
							<span className="font-normal">Issue Count</span>
							<span className="text-green-800">200</span>
						</div>
					</CardItem>
				</CardBody>
			</CardContainer>
		</div>
	);
}
