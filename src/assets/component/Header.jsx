import React from "react";
import { GoBell } from "react-icons/go";
import Do from "../images/Do.jpg";
const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 ">
      <div>
        <h1 className="text-xs">Welcome back</h1>
        <p className="text-xl font-semibold">MY3</p>
      </div>
      <div className="flex items-center space-x-5">
        <div className="hidden md:flex">
          <input
            type="text"
            placeholder="Search"
            className="bg-indigo-50 px-4 py-2 rounded-lg focus:outline-0 focus:ring-2 focus:ring-indigo-100"
          />
        </div>
        <div className="flex items-center space-x-5">
          <button className="relative text-2xl  text-gray-600">
            <GoBell size={32} />
            <span className="absolute top-0 right-0 -mt-1 flex justify-center items-center bg-indigo-400 text-gray-800 font-semibold text-[10px] w-5 h-4 rounded">
              3
            </span>
          </button>
          <img className="w-10 h-10 rounded-full " src={Do} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Header;
