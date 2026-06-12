import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import imageOne from "../../assets/hiro1.webp";
import imageTwo from "../../assets/hiro2.webp";
import imageThree from "../../assets/hiro3.webp";
import imageMobile from "../../assets/hiromobile.webp";
import imageMobile2 from "../../assets/hiromobile2.webp";
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
          <img src={imageMobile} className=" w-full sm:hidden" alt="" />
          <img src={imageOne} alt="" className="hidden sm:block" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageMobile2} className="w-full sm:hidden" alt="" />
          <img src={imageTwo} alt="" className="hidden sm:block" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageMobile} className="w-full sm:hidden" alt="" />
          <img src={imageThree} alt="" className="hidden sm:block" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperImageMain;
