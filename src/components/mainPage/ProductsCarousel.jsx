import ProductCart from "./ProductCart";
import useFetch from "../shared/useFetch";
import Lottie from "lottie-react";
import animationError from "../../assets/8418934e-1153-11ee-b862-8f7bf804c03e.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { BeatLoader } from "react-spinners";

function ProductsCarousel() {
  const { isError, isLoading, fetchdata } = useFetch(
    "https://dummyjson.com/products"
  );

  const products = fetchdata?.products || [];
  console.log("products", products);

  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        <BeatLoader color="#ff0000" />
      </div>
    );

  if (isError)
    return (
      <div className="flex justify-center items-center">
        <Lottie animationData={animationError} loop={true} />
      </div>
    );

  if (!products.length) {
    return <p>No products</p>;
  }

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="w-full "
      spaceBetween={10}
      slidesPerView={4}
      breakpoints={{
        200: { slidesPerView: 1 },
        670: { slidesPerView: 2 },
        760: { slidesPerView: 4 },
      }}>
      {products.map((item) => (
        <SwiperSlide>
          <ProductCart
            id={item?.id}
            key={item?.id}
            title={item?.title}
            description={item?.description}
            price={item?.price}
            rating={item?.rating}
            image={item?.images}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProductsCarousel;
