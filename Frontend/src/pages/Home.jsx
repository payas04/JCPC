import Draggable from "react-draggable";
import Logo from "../assets/JioCloudPC.png";
import { useNavigate } from "react-router-dom";
import { MdShortcut } from "react-icons/md";
import CustomModal from "../components/CustomModal";

const Home = () => {
  const navigate = useNavigate();

  const handleDrag = (e, position) => {
    const { x, y } = position;
    // console.log(`Current position: X: ${x}, Y: ${y}`);
  };
  return (
    <div className="w-full h-full bg-gradient-to-r from-red-500 via-orange-400 to-pink-600">
      <Draggable
        bounds="parent"
        onDrag={handleDrag}
        defaultPosition={{ x: 25, y: 60 }}
      >
        <div
          className="w-[100px] h-[85px] text-center"
          // style={{
          // 	cursor: isDragging ? "move" : "pointer",
          // }}
          onDoubleClick={() => {
            navigate("/accops/dashboard");
          }}
          // onDragStart={() => {
          // 	setIsDragging(true);
          // }}
          // onDragEnd={() => {
          // 	setIsDragging(false);
          // }}
        >
          <img
            src={Logo}
            alt="JioCloudPc logo"
            className="w-[50px] h-[50px] rounded-lg block mx-auto mb-3 "
          />
          <MdShortcut className="absolute top-10 left-4 bg-blue-600 rounded-sm w-5" />
          JioCloudPC
        </div>
      </Draggable>
    </div>
  );
};

export default Home;
