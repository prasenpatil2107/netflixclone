import React from "react";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

function Header() {
  return (
    <div className="absolute z-10 flex w-[100%] items-center justify-between bg-gradient-to-b from-black px-6">
      <img
        className="w-56"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="logo"
      />
      <div className="flex items-center">
        <h1 className="text-lg font-medium text-white">Netflix Clone</h1>
        <MdOutlineArrowDropDownCircle size="24px" color="white"/>
        <div className="ml-4">
          <button className="bg-red-800 text-white px-4 py-2">Search</button>
          <button className="bg-red-800 text-white px-4 py-2 ml-4">Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
