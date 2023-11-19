import React from "react";
import tttlogo from "../assets/ttt_logo.png";
import vline from "../assets/line.png";

function Navbar() {
  return (
    <div>
      <nav className="bg-gray-900 h-16 flex items-center text-slate-200">
        <div className="flex flex-1 h-10 px-3 ml-4">
          <img src={tttlogo} alt="ttt logo" className="inline-block" />
          <img src={vline} alt="ttt logo" className="ml-2 mr-2" />
          <h2 className="flex items-center tracking-widest">STORIES</h2>
        </div>
        <div className="flex flex-2 mr-8 items-center h-7 bg-amber-400 px-2 rounded text-base tracking-tight text-slate-800 font-bold">
          Courses
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
