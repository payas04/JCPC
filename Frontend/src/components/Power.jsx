import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegCircle } from "react-icons/fa";
import { GoMoon } from "react-icons/go";
import { IoPower } from "react-icons/io5";

import { useAuth } from "../context/auth";

function Power() {
  const navigate = useNavigate();
  const { logout, setIsShutdown } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  function handleSleep() {
    logout();
    navigate("/");
  }

  function handleShut() {
    navigate("/");
    setIsShutdown(true);
    // setTimeout(() => {}, 2700);
  }

  return (
    <span
      ref={dropdownRef}
      onClick={toggleDropdown}
      className="cursor-pointer rounded-full w-[40px] h-[40px] flex justify-center items-center relative"
      style={{
        backgroundColor: isDropdownOpen
          ? "rgba(0, 0, 0, 0.5)"
          : "rgba(255, 255, 255, 0.1)",
      }}
    >
      <div className="flex justify-center items-center">
        <FaRegCircle size={20} />
      </div>
      {isDropdownOpen && (
        <ul className="absolute bottom-14 left-3 p-2 shadow rounded-lg w-40 bg-neutral-800 border-black border-2 border-opacity-10 flex flex-col gap-3">
          <li>
            <button
              className="flex gap-2 hover:bg-neutral-500 w-full p-1 items-center rounded-md"
              onClick={handleSleep}
            >
              <GoMoon /> Sleep
            </button>
          </li>
          <li>
            <button
              className="flex gap-2 hover:bg-neutral-500 w-full p-1 items-center rounded-md"
              onClick={handleShut}
            >
              <IoPower /> Shut Down
            </button>
          </li>
        </ul>
      )}
    </span>
  );
}

export default Power;
