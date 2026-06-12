import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import imageOne from "../../assets/hiro1.webp";
import imageTwo from "../../assets/hiro2.webp";
import imageThree from "../../assets/hiro3.webp";
import "../../index.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

function SwiperImageMain() {
  return (
    <div className="mt-[-110px]">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}>
        <SwiperSlide>
          <img src={imageOne} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageTwo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageThree} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperImageMain;
