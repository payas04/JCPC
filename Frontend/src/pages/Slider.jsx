import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Slider({ isMenuOpen, toggleMenu }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => setCurrentTime(new Date());
    const intervalID = setInterval(updateTime, 1000);

    return () => clearInterval(intervalID);
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        toggleMenu();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [toggleMenu]);

  const formatDate = (date) => {
    const options = { weekday: "long", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const formatTime = (time) => {
    const options = { hour: "2-digit", minute: "2-digit", hour12: false };
    return time.toLocaleTimeString([], options);
  };

  return (
    <motion.nav
      transition={{ type: "spring", damping: 200, stiffness: 1000 }}
      initial={{ y: "0" }}
      animate={{ y: isMenuOpen ? "0%" : "-110%" }}
      className="fixed inset-0 bg-black h-full w-full z-50 bg-gradient-to-r from-red-500 via-orange-400 to-pink-600"
      onClick={(e) => {
        e.stopPropagation();
        toggleMenu();
      }}
      onKeyPress={(e) => {
        e.stopPropagation();
        toggleMenu();
      }}
      // style={{
      // 	background: "url(https://images8.alphacoders.com/134/1346089.png)",
      // 	backgroundSize: "cover",
      // }}
    >
      <div className="relative flex flex-col justify-center h-full text-primary">
        <div className="absolute flex flex-col items-center w-full top-32 text-white">
          <div className="text-9xl font-bold">{formatTime(currentTime)}</div>
          <div className="font-semibold text-4xl mt-5">
            {formatDate(currentTime)}
          </div>
          <div className="font-semibold text-xl mt-52 w-92 flex flex-col items-center">
            Press anywhere on screen to continue
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
