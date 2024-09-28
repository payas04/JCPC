import WorkItemTile from "./WorkItemTile";

export default function JioPcObservation({ title, workItems }) {
	return (
		<div className="container mx-auto w-[64%]">
			<h2 className="font-bold text-3xl mb-5">{title}</h2>
			<ul className="grid grid-cols-3 gap-4">
				{workItems.map((item, index) => (
					<WorkItemTile
						key={index}
						type={title}
						title={item.title}
						count={item.count}
						color={item.color}
					/>
				))}
			</ul>
		</div>
	);
}
