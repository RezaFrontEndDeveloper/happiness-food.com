import { Link } from "react-router-dom";
import { FiDollarSign } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";
import { memo } from "react";

function ProductCart({ id, title, description, price, rating, image }) {
  return (
    <Link to={`/product/${id}`} className="flex flex-col  items-stretch  ms-center bg-gray-50 sm:gap-10 w-full sm:w-80 mx-auto p-10 rounded-2xl cursor-pointer hover:bg-red-100 transition-all gap-4  ">
      <div>
        <img src={image?.[0]} alt="" className="w-full h-50" />
        <h3 className="text-red-700 text-xl">{title}</h3>
        <p>{description}</p>
        <div className="flex justify-between w-full items-center">
          <div className="flex justify-center items-center">
            <span className="text-xl font-bold">{price}</span>
            <span>
              <FiDollarSign color="red" />
            </span>
          </div>

          <div className="flex justify-center items-center">
            <span>{rating}</span>
            <span>
              <IoIosStar color="gold" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default memo(ProductCart);
