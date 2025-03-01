import { DownloadApp } from "./icon/handPhone";

const Navbar = () => {
  return (
    <div
      className="flex w-screen h-15  items-center justify-around z-10 bg-transparent transition-opacity duration-[250ms] ease-linear  fixed text-white text-[1.2rem] leading-[1.5] text-right font-light  cursor-pointer rounded-[0.6rem] align-middle p-[0.8rem]"
      style={{
        transition:
          "opacity 0.25s linear, height 0.56s cubic-bezier(0.52, 0.16, 0.24, 1)",
      }}
    >
      <div className="flex justify-center items-center space-x-2">
        <DownloadApp />
        <p>Get the App</p>
      </div>
      <div>
        <div className="flex justify-between space-x-15 ">
          <a>Explore</a>
          <a>Plane</a>
          <a>About Us</a>
          <a>Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
