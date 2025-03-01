import { useState, useEffect } from "react";
import { DownloadApp } from "./icon/handPhone";

const Navbar = ({ setPage }: { setPage: (page: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex w-screen h-[60px] items-center justify-around z-10 fixed top-0 p-3 transition-all duration-300 ${
        isScrolled
          ? "bg-white text-black shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="flex justify-center items-center space-x-2 rounded-2xl p-2 hover:bg-gray-200 cursor-pointer">
        <DownloadApp />
        <p>Get the App</p>
      </div>
      <div className="flex space-x-10">
        <a
          className="hover:underline cursor-pointer"
          onClick={() => setPage("explore")}
        >
          Explore
        </a>
        <a
          className="hover:underline cursor-pointer"
          onClick={() => setPage("plane")}
        >
          Plane
        </a>
        <a
          className="hover:underline cursor-pointer"
          onClick={() => setPage("about")}
        >
          About Us
        </a>
        <a
          className="hover:underline cursor-pointer"
          onClick={() => setPage("login")}
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default Navbar;
