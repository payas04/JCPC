import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { IoMdRefresh } from "react-icons/io";

const Header = () => {
  const location = useLocation();
  return (
    <div
      className="fixed top-0 w-full h-6 bg-white bg-opacity-50 shadow-md flex justify-between items-center px-4 text-white text-sm z-20"
      style={{
        display:
          location.pathname == "/"
            ? "none"
            : location.pathname == "/home"
            ? "none"
            : "",
      }}
    >
      <div
        className="cursor-pointer"
        onClick={() => {
          window.location.reload();
        }}
      >
        <IoMdRefresh color="black" size={15} />
      </div>
      <div className="flex space-x-2 cursor-pointer">
        <Link to={"/home"}>
          <IoClose
            color="black"
            size={15}
            className="hover:bg-red-500 hover:rounded-full "
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
