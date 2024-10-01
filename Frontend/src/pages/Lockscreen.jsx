import { useState, useCallback } from "react";

import Login from "./Login";
import Slider from "./Slider";

function Lockscreen() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  // Use useCallback to memoize the function and avoid unnecessary re-renders
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div className="absolute bg-gradient-to-r from-red-500 via-orange-400 to-pink-600  bg-opacity-80 h-screen w-full opacity-20  "></div>

      <div className="absolute left-0 top-0 h-screen w-full flex flex-col items-center z-10">
        <Login />
      </div>

      <Slider
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        toggleMenu={toggleMenu}
      />
    </>
  );
}

export default Lockscreen;
