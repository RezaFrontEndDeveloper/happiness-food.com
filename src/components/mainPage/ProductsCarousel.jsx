import useFetch from "../useFetch";
import { BeatLoader } from "react-spinners";
import Lottie from "lottie-react";
import animationError from "../../assets/8418934e-1153-11ee-b862-8f7bf804c03e.json";
import { FaDollarSign } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

function ProductsCarousel() {
  const { isError, isLoading, fetchdata } = useFetch("https://dummyjson.com/products");

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
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      navigation
      pagination
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
          <ProductCart id={item?.id} key={item?.id} title={item?.title} description={item?.description} price={item?.price} rating={item?.rating} image={item?.images} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProductsCarousel;

function ProductCart({ id, title, description, price, rating, image }) {
  return (
    <Link to={`/product/${id}`} className="flex flex-col items-center bg-gray-50 sm:gap-10 w-full sm:w-80 mx-auto p-10 rounded-2xl cursor-pointer hover:bg-red-100 transition-all ">
      <div>
        <img src={image?.[0]} alt="" />
        <h3 className="text-red-700 text-xl">{title}</h3>
        <p>{description}</p>
        <div className="flex justify-between w-full items-center">
          <div className="flex justify-center items-center">
            <span>{price}</span>
            <span>
              <FaDollarSign />
            </span>
          </div>

          <div className="flex justify-center items-center">
            <span>{rating}</span>
            <span>
              <FaStar />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
