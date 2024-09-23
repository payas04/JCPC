import { useNavigate, useLocation } from "react-router-dom";
import JioCloudLogo from "../assets/JioCloudPC.png";
import { FaRegCircle, FaArrowAltCircleUp } from "react-icons/fa";
import { LuListMusic } from "react-icons/lu";
import { PiNumberCircleTwoFill } from "react-icons/pi";
import { MdOutlineSignalWifi4Bar } from "react-icons/md";
import { MdOutlineBatteryFull } from "react-icons/md";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const JioCloudPath = location.pathname.startsWith("/accops");
  return (
    <div
      className="fixed bottom-0 w-full h-12 rounded-t-3xl justify-between items-center space-x-6 px-1 z-10"
      style={{
        backgroundColor: JioCloudPath
          ? "rgba(0, 0, 0, 1)"
          : "rgba(0, 0, 0, 0.5)",
        display: location.pathname == "/" ? "none" : "flex",
      }}
    >
      <div className="flex gap-4">
        <span
          className="cursor-pointer bg-white bg-opacity-10 rounded-full w-[40px] h-[40px] flex justify-center items-center"
          onClick={() => {
            navigate("/");
          }}
        >
          <FaRegCircle size={20} />
        </span>
      </div>

      <div className="flex gap-4 justify-center items-center">
        <span className="cursor-default bg-white bg-opacity-10 rounded-full w-[80px] h-[35px] flex justify-center items-center">
          Desk 1
        </span>
        <span
          className="text-white text-2xl cursor-pointer p-1 rounded-sm border-white"
          style={{
            borderBottomWidth: JioCloudPath ? 2 : 0,
          }}
          onClick={() => {
            if (JioCloudPath) navigate("/home");
            else navigate("/accops/dashboard");
          }}
        >
          <img
            src={JioCloudLogo}
            alt="JioCloudPc logo"
            className="w-[30px] h-full rounded-lg block mx-auto"
          />
        </span>
        <span
          className="text-white text-2xl cursor-pointer p-1 rounded-sm border-white"
          style={{
            borderBottomWidth: JioCloudPath ? 2 : 0,
          }}
          onClick={() => {
            if (JioCloudPath) navigate("/home");
            else navigate("/accops/dashboard");
          }}
        >
          <img
            src={JioCloudLogo}
            alt="JioCloudPc logo"
            className="w-[30px] h-full rounded-lg block mx-auto"
          />
        </span>
        <span
          className="text-white text-2xl cursor-pointer p-1 rounded-sm border-white"
          style={{
            borderBottomWidth: JioCloudPath ? 2 : 0,
          }}
          onClick={() => {
            if (JioCloudPath) navigate("/home");
            else navigate("/accops/dashboard");
          }}
        >
          <img
            src={JioCloudLogo}
            alt="JioCloudPc logo"
            className="w-[30px] h-full rounded-lg block mx-auto"
          />
        </span>
        <span
          className="text-white text-2xl cursor-pointer p-1 rounded-sm border-white"
          style={{
            borderBottomWidth: JioCloudPath ? 2 : 0,
          }}
          onClick={() => {
            if (JioCloudPath) navigate("/home");
            else navigate("/accops/dashboard");
          }}
        >
          <img
            src={JioCloudLogo}
            alt="JioCloudPc logo"
            className="w-[30px] h-full rounded-lg block mx-auto"
          />
        </span>
      </div>
    
      <div className="flex gap-1">
        <span className=" bg-white bg-opacity-10 rounded-full w-[40px] h-[40px] flex justify-center items-center">
          <LuListMusic size={20} />
        </span>
        <span className=" bg-white bg-opacity-10 rounded-s-3xl rounded-e-md w-[70px] h-[40px] flex justify-center items-center gap-1 px-5">
          <FaArrowAltCircleUp size={20} className="min-w-[20px] min-h-[20px]" />
          <PiNumberCircleTwoFill size={50} className="min-w-[23px] min-h-[20px]" />
        </span>
        <span className=" cursor-default bg-white bg-opacity-10 rounded-md w-[80px] h-[40px] flex justify-center items-center">
          <p>Sept 23</p>
        </span>
        <span className=" cursor-default bg-white bg-opacity-10 rounded-s-md rounded-e-3xl w-[130px] h-[40px] flex justify-center items-center space-x-1">
          <p>14:49</p>
          <p>US</p>
          <MdOutlineSignalWifi4Bar size={20} />
          <MdOutlineBatteryFull size={20} />
        </span>
      </div>
    </div>
  );
};

export default Footer;
