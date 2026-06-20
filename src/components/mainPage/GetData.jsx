import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { BeatLoader } from "react-spinners";

import useFetch from "../shared/useFetch";
import PostsCart from "./PostsCart";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import animationError from "../../assets/8418934e-1153-11ee-b862-8f7bf804c03e.json";
import Lottie from "lottie-react";

function GetData() {
  const { isError, isLoading, fetchdata } = useFetch(
    "https://dummyjson.com/posts"
  );

  const posts = fetchdata?.posts || [];

  return isLoading ? (
    <div className="flex justify-center items-center">
      <BeatLoader color="#ff0000" />
    </div>
  ) : isError ? (
    <div className="flex justify-center items-center">
      <Lottie animationData={animationError} loop={true} />
    </div>
  ) : posts.length === 0 ? (
    <p>no posts</p>
  ) : (
    <Swiper
      modules={[Autoplay, Pagination]}
      breakpoints={{
        200: { slidesPerView: 1 },
        500: { slidesPerView: 2 },
        670: { slidesPerView: 4 },
      }}
      className="w-full h-auto"
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      spaceBetween={20}
      slidesPerView={4}>
      {posts?.map((item) => {
        return (
          <SwiperSlide key={item?.id}>
            <PostsCart
              reactions={item?.reactions}
              title={item?.title}
              body={item?.body}
              id={item?.id}
              tags={item?.tags}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default GetData;
