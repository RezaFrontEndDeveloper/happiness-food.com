import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

function ProductSinglePage() {
  const { id } = useParams();
  const { isError, isLoading, fetchdata } = useFetch(`https://dummyjson.com/products/${id}`);
  console.log("single product", fetchdata);

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex flex-1 justify-center items-center gap-8 flex-col">
        <img src={fetchdata?.images?.[0]} alt="" />
      </div>
      <div className="flex flex-1 justify-center items-center gap-8 flex-col">
        <h3 className="text-2xl text-red-700 font-extrabold">{fetchdata?.title}</h3>
        <p>
          <span className="text-red-400 font-extrabold">Barnd</span> : {fetchdata?.brand}
        </p>
        <p className="w-70 border border-gray-200 bg-gray-50 p-8 rounded-2xl">{fetchdata?.description}</p>
        <p className="text-green-600 text-2xl">
          <span className="text-red-400 font-extrabold">Price</span>:{fetchdata?.price}
        </p>
        <button className="bg-red-700 text-white px-4 py-1 rounded-2xl">Add to cart</button>
      </div>
    </div>
  );
}

export default ProductSinglePage;
