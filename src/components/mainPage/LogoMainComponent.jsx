import LogoReusebleComponent from "./LogoReusebleComponent";
import logo1 from "../../assets/icon(1).svg";
import logo2 from "../../assets/plant.svg";
import logo3 from "../../assets/fish.svg";
import logo4 from "../../assets/grilled.svg";
import logo5 from "../../assets/hamburger.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function LogoMainComponent() {
  return (
    <div className="flex mb-10 justify-between items-center mx-10">
      <Swiper
        modules={[Pagination, Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        loop={true}
        pagination={{ clickable: true }}
        spaceBetween={5}
        slidesPerView={4}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}>
        <SwiperSlide>
          <LogoReusebleComponent icon={logo1}>Nuggets and breadcrumbs</LogoReusebleComponent>
        </SwiperSlide>

        <SwiperSlide>
          <LogoReusebleComponent icon={logo2}>plant</LogoReusebleComponent>
        </SwiperSlide>

        <SwiperSlide>
          <LogoReusebleComponent icon={logo3}>Fish and shrimp</LogoReusebleComponent>
        </SwiperSlide>

        <SwiperSlide>
          <LogoReusebleComponent icon={logo4}>grilled</LogoReusebleComponent>
        </SwiperSlide>

        <SwiperSlide>
          <LogoReusebleComponent icon={logo5}>hamburger</LogoReusebleComponent>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default LogoMainComponent;
