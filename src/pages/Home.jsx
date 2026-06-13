import LogoMainComponent from "../components/mainPage/LogoMainComponent";
import SwiperImageMain from "../components/mainPage/SwiperImageMain";
import TitleMain from "../components/mainPage/TitleMain";
import GetData from "../components/GetData";
import ProductsCarousel from "../components/mainPage/ProductsCarousel";

function Home() {
  return (
    <div className="flex flex-col gap-20">
      <SwiperImageMain />
      <TitleMain>Product categories</TitleMain>
      <LogoMainComponent />
      <TitleMain>happiness articles</TitleMain>
      <GetData />
      <TitleMain>happiness Prodacts</TitleMain>
      <ProductsCarousel />
    </div>
  );
}

export default Home;
