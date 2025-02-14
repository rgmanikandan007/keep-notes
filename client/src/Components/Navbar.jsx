import React from "react";

const Navbar = ({setQuery}) => {
  return (
    <>
      <nav className="flex items-center justify-between px-4 py-3 bg-gray-800 text-white">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">Notes</h1>
        </div>

        <div className="flex-grow mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-md px-3 py-2 text-gray-300 rounded-md focus:outline-none focus:ring-2 "
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-red-500 rounded-md hover:bg-red-600">
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
