import React from "react";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";
import pData from "../assets/postData.json";
function Posts() {
  return (
    <div>
      <div className="m-2 rounded-xl p-2 bg-slate-800">
        <h1 className="text-slate-100 ml-1 mt-1 mb-2 text-lg font-bold tracking-wider">
          {" "}
          134 Posts
        </h1>
        <div className="Blogs text-slate-300">
          {pData.map((post) => (
            <div key={post.id} className="post border-t-2 border-t-slate-700">
              <span className="flex mb-2 mt-2">
                <h2 className="title flex flex-1 ml-2 font-semibold text-xl">
                  {post.title}
                </h2>
                <HandThumbUpIcon className="flex flex-2 w-6 text-blue-300 mr-3" />
              </span>
              <p className="content ml-2 text-lg">{post.content}</p>
              <div className="footer mt-3 mb-3 text-xs font-semibold">
                <span className="ml-2 text-amber-500">{post.footerpre}</span>
                <span className="mr-2"> by {post.footersuf}</span>
                <span>{post.date} | </span>
                {post.readingtime} Read | {post.views} Views
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;
