import { useState, useEffect } from "react";
import { DownloadApp } from "./icon/handPhone";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex w-screen h-15 items-center justify-around z-10 fixed top-0 p-[0.8rem] transition-all duration-300 ${
        isScrolled
          ? "bg-white text-black shadow-md"
          : "bg-transparent text-white"
      }`}
      style={{
        transition:
          "opacity 0.25s linear, height 0.56s cubic-bezier(0.52, 0.16, 0.24, 1)",
      }}
    >
      <div className="flex justify-center items-center space-x-2 rounded-2xl p-2 hover:bg-gray-200">
        <DownloadApp />
        <p>Get the App</p>
      </div>
      <div>
        <div className="flex justify-between space-x-10 ">
          <a className="hover:underline">Explore</a>
          <a className="hover:underline">Plane</a>
          <a className="hover:underline">About Us</a>
          <a className="hover:underline">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
