import { useState } from "react";
import CustomModal from "./CustomModal";
import { useNavigate } from "react-router-dom";

const StatCard = ({
	title,
	value,
	color,
	icon: Icon,
	blocker,
	critical,
	major,
	normal,
	minor,
	shouldOpenModal = false,
}) => {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	const handleOpenModal = () => {
		if (shouldOpenModal) {
			setOpen(true);
		}
		if (title === "Total Members") {
			navigate("/accops/jiocloudpc");
		}
	};

	return (
		<div
			className={`rounded-lg p-6 text-white ${color} cursor-pointer`}
			onClick={handleOpenModal}>
			<CustomModal
				open={open}
				setOpen={setOpen}
				heading={title}
				blocker
				critical
				major
				normal
				minor
			/>
			<div className="flex justify-between items-start mb-4">
				<div>
					<h3 className="text-lg font-medium">{title}</h3>
					<p className="text-4xl font-bold mt-2">{value}</p>
				</div>
				<div className="p-2 bg-white bg-opacity-30 rounded-lg">
					<Icon size={24} />
				</div>
			</div>
		</div>
	);
};

export default StatCard;
