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
      <div
        className="absolute bg-black h-screen w-full opacity-80  "
        style={{
          background:
            "url(https://www.wallpaperhub.app/_next/image?url=https%3A%2F%2Fcdn.wallpaperhub.app%2Fcloudcache%2F6%2F1%2Fd%2F8%2Fe%2F1%2F61d8e1478765c4255530a177f093168488e2ebaa.jpg&w=4500&q=100) no-repeat center center",
          backgroundSize: "cover",
        }}
      ></div>

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
