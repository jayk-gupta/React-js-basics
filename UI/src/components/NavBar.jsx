import React from "react";

function NavBar() {
  return (
    <nav className="flex justify-between pl-12 pr-12 pt-4 text-sm">
      <ul className="flex gap-6">
        <a href="" className="text-slate-400 hover:text-gray-100">
          Audi
        </a>
        <a href="" className="text-slate-400 hover:text-gray-100">
          AR View
        </a>
        <a href="" className="text-slate-400 hover:text-gray-100">
          Our Technology
        </a>
        <a href="" className="text-slate-400 hover:text-gray-100">
          Our Technology
        </a>
        <a href="" className="text-slate-400 hover:text-gray-100">
          Subsscription
        </a>
      </ul>
      <ul className="flex gap-4 ">
        <button className="bg-gray-600 hover:bg-gray-400  rounded-lg text-[20px] px-2 py-1">
          Register
        </button>
        <button className="bg-gray-600 hover:bg-gray-400 text-[20px] px-2 py-1 rounded-lg text-sm">
          Demo
        </button>
      </ul>
    </nav>
  );
}

export default NavBar;
