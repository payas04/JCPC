import WorkItemTile from "./WorkItemTile";

const workItems = [
  { title: "Launch Critical", count: 22, color: "bg-red-600" },
  { title: "Open Blocker", count: 10, color: "bg-red-800" },
  { title: "Open Critical", count: 82, color: "bg-orange-500" },
  { title: "Product Confirmation", count: 3, color: "bg-purple-400" },
  { title: "Ready for Test", count: 0, color: "bg-blue-200" },
  { title: "JioPC Accops Issues", count: 27, color: "bg-red-500" },
];

export default function JioPcObservation({ title }) {
  return (
    <div className="container mx-auto w-[64%]">
      <h2 className="font-bold text-3xl mb-5">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-full md:grid-cols-3 lg:grid-cols-3 gap-4">
        {workItems.map((item, index) => (
          <WorkItemTile
            key={index}
            type={title}
            title={item.title}
            count={item.count}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
}
