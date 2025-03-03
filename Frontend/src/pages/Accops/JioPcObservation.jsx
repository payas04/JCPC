import WorkItemTile from "./WorkItemTile";

export default function JioPcObservation({ title, workItems }) {
	return (
		<div className="container mx-auto w-[100%]">
			<ul className="grid grid-cols-3 gap-4">
				{workItems.map((item, index) => (
					<WorkItemTile
						key={index}
						type={title}
						title={item.title}
						count={item.count}
						color={item.color}
						text={item.text}
						definition={item.definition}
					/>
				))}
			</ul>
		</div>
	);
}
