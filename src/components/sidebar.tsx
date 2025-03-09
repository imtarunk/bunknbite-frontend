import React from "react";

interface SidebarProps {
  page: string; // current page
  setPage: (page: string) => void; // callback to change page
}

const Sidebar: React.FC<SidebarProps> = ({ setPage }) => {
  return (
    <div
      className={`h-full bg-gray-800 text-white w-64 transition-transform transform 
         "translate-x-0" : "-translate-x-full"
      } ease-in-out duration-300 `}
    >
      <div className="bg-gray-900 p-4 flex items-center justify-between border-b ">
        <span className="text-lg font-semibold animate-pulse">Create Meal</span>
        <button
          className="focus:outline-none bg-green-300"
          onClick={() => setPage("createMeal")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transition-transform transform  duration-300`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          <li
            className="hover:bg-gray-700 p-2 rounded-md transition-colors duration-200 cursor-pointer flex items-center"
            onClick={() => setPage("createMeal")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7a2 2 0 113 3l-7 7m6 6v-3.46a9.003 9.003 0 01-8.727-8.727L15 2.545"
              />
            </svg>
            <span>Create Meal</span>
          </li>
          <li
            className="hover:bg-gray-700 p-2 rounded-md transition-colors duration-200 cursor-pointer flex items-center"
            onClick={() => setPage("dashboard")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7a2 2 0 113 3l-7 7m6 6v-3.46a9.003 9.003 0 01-8.727-8.727L15 2.545"
              />
            </svg>
            <span>Dashboard</span>
          </li>
          <li
            className="hover:bg-gray-700 p-2 rounded-md transition-colors duration-200 cursor-pointer flex items-center"
            onClick={() => setPage("Plans")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 17v-3m3 3v-1m3 1v-3m0 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Meals</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
