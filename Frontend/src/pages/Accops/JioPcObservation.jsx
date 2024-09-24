const WorkItemTile = ({ title, count, color }) => (
  <div
    className={`p-4 ${color} hover:scale-110 transition-all duration-200  text-white rounded-lg shadow-md`}
  >
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    <p className="text-4xl font-bold mb-2">{count}</p>
    <p className="text-sm">Work items</p>
  </div>
);

const workItems = [
  { title: "Launch Critical", count: 22, color: "bg-red-600" },
  { title: "Open Blocker", count: 10, color: "bg-red-800" },
  { title: "Open Critical", count: 82, color: "bg-orange-500" },
  { title: "Product Confirm...", count: 3, color: "bg-purple-400" },
  { title: "Ready for Test", count: 0, color: "bg-blue-200" },
  { title: "JioPC Accops Issues.", count: 27, color: "bg-red-500" },
];

export default function JioPcObservation() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="font-bold text-2xl mb-5">JioPC Observations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {workItems.map((item, index) => (
          <WorkItemTile
            key={index}
            title={item.title}
            count={item.count}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
}
