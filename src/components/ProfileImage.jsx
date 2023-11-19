import React, { useState } from "react";
import coverPic from "../assets/coverpic.jpg";

function ProfileImage() {
  //Profile Data
  const [name, setName] = useState("Harsh Singh");
  const [followers, setFollowers] = useState("1033");
  const [following, setFollowing] = useState("501");
  const displayPicture = require("../assets/profile.jpg");

  return (
    <div>
      <div className="coverpic w-full h-20 mb-4">
        <img src={coverPic} alt="cover picture" className="h-40 w-full" />
      </div>
      <div className="flex flex-1 w-full">
        <img
          src={displayPicture}
          className="flex w-1/3 h-1/3 ml-3 mr-3 mt-5 border-4 border-slate-300 rounded-full"
        />
        <div className="flex flex-col self-end h-3/5 w-3/5">
          <div>
            <h1 className="font-bold text-xl tracking-widest text-slate-200">
              {name}
            </h1>
          </div>
          <table className="w-4/5 mt-1">
            <tbody>
              <tr>
                <td className="cell">
                  <div className="flex items-center justify-center border-2 border-slate-200 rounded text-base text-slate-200 tracking-wider font-bold">
                    {followers}
                  </div>
                </td>
                <td className="cell">
                  <div className="flex items-center justify-center border-2 border-slate-200 rounded text-base text-slate-200 tracking-wider font-bold">
                    {following}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-center w-1/4">
                  <h3 className="text-xs font-bold text-slate-300">
                    Followers
                  </h3>
                </td>
                <td className="text-center w-1/4">
                  <h3 className="text-xs font-bold text-slate-300">
                    Following
                  </h3>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProfileImage;
