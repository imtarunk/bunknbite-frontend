import { FaSearch, FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";

const Hero = () => {
  return (
    <div className=" bg-transparent py-20 px-4 text-center absolute text-white mt-40">
      <h1 className="text-8xl font-bold mb-4 ">Bunknbite</h1>
      <h2 className="text-2xl mb-8 font-okra font-normal leading-[1.2] m-o">
        Your one stop for all your bachelor's life
      </h2>
      <div className="flex items-center bg-white shadow-lg rounded-full p-3 max-w-2xl mx-auto w-200">
        {/* Location Section */}
        <div className="flex items-center px-4">
          <FaMapMarkerAlt className="text-red-400 text-lg" />
          <span className="text-gray-600 ml-2">Lucknow</span>
          <FaChevronDown className="text-gray-500 text-sm ml-2" />
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-gray-300 mx-3"></div>

        {/* Search Input */}
        <div className="relative flex-grow">
          <input
            type="text"
            className="w-full py-2 pl-10 pr-4 rounded-full border-none focus:outline-none text-gray-600 placeholder-gray-400"
            placeholder="Search for restaurant, cuisine or a dish"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
