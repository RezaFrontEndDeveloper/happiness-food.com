import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import animationError from "../assets/8418934e-1153-11ee-b862-8f7bf804c03e.json";
import Lottie from "lottie-react";
import { BeatLoader } from "react-spinners";

function SinglePost() {
  const { id } = useParams();

  const { isLoading, isError, fetchdata } = useFetch(`https://dummyjson.com/posts/${id}`);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <BeatLoader color="#ff0000" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center">
        <Lottie animationData={animationError} loop={true} />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center gap-10 my-10 items-center bg-red-50 p-10 rounded-2xl w-1/2 mx-auto">
      <h1 className="text-2xl text-red-700 ">{fetchdata?.title}</h1>
      <p className="text-lg ">{fetchdata?.body}</p>
    </div>
  );
}
export default SinglePost;
