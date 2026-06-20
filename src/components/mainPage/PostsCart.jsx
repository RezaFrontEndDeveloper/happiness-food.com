import { memo, useState } from "react";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { Link } from "react-router-dom";

function PostsCart({ title, body, id, reactions }) {
  const { likes, dislikes } = reactions;

  return (
    <Link to={`/post/${id}`} className="border transition-all hover:bg-red-100 cursor-pointer w-90 mx-auto border-gray-200  flex flex-col justify-center items-center gap-8 h-60 p-8 rounded-2xl">
      <div>
        <h2 className="text-xl text-red-700 font-bold">{title}</h2>
        <p>{body.slice(0, 100)}</p>
        <div className="flex w-full justify-between items-center">
          <div className="flex justify-center items-center">
            <BiLike size={20} />
            {likes}
          </div>
          <div className="flex justify-center items-center">
            {dislikes}
            <BiDislike size={20} />
          </div>
        </div>
        <span className="text-red-700">read more...</span>
      </div>
    </Link>
  );
}
export default memo(PostsCart);
