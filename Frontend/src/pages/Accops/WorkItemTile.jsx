import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const WorkItemTile = ({ type, title, count, color }) => {
	const [isFlipped, setisFlipped] = useState(false);

	function handleHover(e) {
		e.preventDefault();
		setisFlipped(!isFlipped);
	}

	return (
		<div onMouseEnter={handleHover} onMouseLeave={handleHover}>
			<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
				<div className={`p-4 ${color} text-white rounded-lg shadow-md`}>
					<h2 className="text-lg font-semibold mb-2">{title}</h2>
					<p className="text-4xl font-bold mb-2">{count}</p>
					<p className="text-sm">Work items</p>
				</div>

				<div className={`p-4 ${color} text-white rounded-lg shadow-md`}>
					<h2 className="text-lg font-semibold mb-2">
						{type} has {count} {title}
					</h2>
					<p className="text-4xl font-bold ">{count}</p>
				</div>
			</ReactCardFlip>
		</div>
	);
};

export default WorkItemTile;
