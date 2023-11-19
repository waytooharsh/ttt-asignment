import React, { useState } from "react";
import {
  HandThumbUpIcon,
  StarIcon,
  EyeIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

function ProfileStats() {
  const isHighlighted = true;
  const statsFigures = ["110", "18", "9.8K", "3.0K"];
  const statIconsStyle = [
    "w-6 mr-1 text-amber-500",
    "w-6 mr-1 text-blue-500",
    "w-6 mr-1 text-slate-500",
    "w-6 mr-1 text-pink-500",
  ];
  const [statCSS, setStatCSS] = useState(
    "mr-3 font-semibold tracking-wide text-slate-300"
  );
  const [designation, setDesignation] = useState(
    "Student at Lovely Professional University"
  );
  const [social, setSocial] = useState(
    "https://www.linkedin.com/in/harsh--singh/"
  );
  return (
    <div className="m-2 rounded-xl p-4 bg-slate-800">
      <div className="x">
        <h2 className="font-semibold mb-1 text-slate-300">{designation}</h2>
        <a href={social} className="text-blue-400 text-s">
          {social}
        </a>
        <span className="flex mt-1">
          <StarIcon className={statIconsStyle[0]} />
          <span className={statCSS}>{statsFigures[0]}</span>
          <HandThumbUpIcon className={statIconsStyle[1]} />
          <span className={statCSS}>{statsFigures[1]}</span>
          <EyeIcon className={statIconsStyle[2]} />
          <span className={statCSS}>{statsFigures[2]}</span>
          <HeartIcon className={statIconsStyle[3]} />
          <span className={statCSS}>{statsFigures[3]}</span>
        </span>
      </div>
    </div>
  );
}

export default ProfileStats;
