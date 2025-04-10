import { useState } from "react";
import CustomModal from "./CustomModal";
import { useNavigate } from "react-router-dom";
import { SquareArrowOutUpRight } from "lucide-react";

const StatCard = ({
	title,
	value,
	color,
	icon: Icon,
	pieData,
	shouldOpenModal = false,
	textColor,
}) => {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	const handleOpenModal = () => {
		if (shouldOpenModal) {
			setOpen(true);
		}
		if (title === "Total Members") {
			navigate("/accops/myteam");
		}
	};

	return (
		<div
			className={`rounded-lg p-6 ${textColor} ${color} cursor-pointer`}
			onClick={handleOpenModal}>
			<CustomModal
				open={open}
				setOpen={setOpen}
				heading={title}
				pieData={pieData}
				totalIssues={value}
			/>
			<div className="flex justify-between items-start mb-4">
				<div>
					<h3 className="text-lg font-normal">{title}</h3>
					<p className="text-4xl font-semibold mt-2">{value}</p>
				</div>
				<div className="p-2 bg-white bg-opacity-30 rounded-lg">
					<Icon size={24} />
				</div>
			</div>
			<div className="flex justify-end">
				<SquareArrowOutUpRight />
			</div>
		</div>
	);
};

export default StatCard;
