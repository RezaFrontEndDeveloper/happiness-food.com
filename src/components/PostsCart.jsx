import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

function PostsCart({ title, body, id, tags, reactions }) {
  const { likes, dislikes } = reactions;
  return (
    <div className="border  w-90 mx-auto border-gray-200 bg-gray-50 flex flex-col justify-center items-center gap-8 p-8 rounded-2xl">
      <h2 className="text-2xl text-red-700 font-bold">{title}</h2>
      <p>{body}</p>
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
    </div>
  );
}
export default PostsCart;
