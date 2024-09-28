import "./WorkItemTile.css";

const WorkItemTile = ({ type, title, count, color }) => (
  <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <div
          className={`p-4 ${color} hover:scale-110 transition-all duration-200  text-white rounded-lg shadow-md`}
        >
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          <p className="text-4xl font-bold mb-2">{count}</p>
          <p className="text-sm">Work items</p>
        </div>
      </div>
      <div className="flip-card-back ">
        <div
          className={`p-4 ${color} hover:scale-110 transition-all duration-200  text-white rounded-lg shadow-md`}
        >
          <h2 className="text-lg font-semibold mb-2">
            {type} has {count} {title}
          </h2>
          <p className="text-4xl font-bold mb-2">{count}</p>
        </div>
      </div>
    </div>
  </div>
);

export default WorkItemTile;
