import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from "./useFetch";
import PostsCart from "./PostsCart";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function GetData() {
  const { isError, isLoading, fetchdata } = useFetch("https://dummyjson.com/posts");

  useEffect(() => {
    console.log("DATA", fetchdata);
  }, [fetchdata]);

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      breakpoints={{
        200: { slidesPerView: 1 },
        500: { slidesPerView: 2 },
      }}
      className="w-full h-auto"
      autoplay={{
        delay: 2000, // هر 2 ثانیه اسلاید عوض میشه
        disableOnInteraction: false, // وقتی کاربر دست زد، قطع نشه
      }}
      spaceBetween={20}
      slidesPerView={4}>
      {fetchdata?.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <PostsCart reactions={item.reactions} title={item.title} body={item.body} id={item.id} tags={item.tags} reactions={item.reactions} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default GetData;
