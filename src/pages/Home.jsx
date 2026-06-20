import LogoMainComponent from "../components/mainPage/LogoMainComponent";
import SwiperImageMain from "../components/mainPage/SwiperImageMain";
import TitleMain from "../components/mainPage/TitleMain";

const GetData = lazy(() => import("../components/mainPage/GetData"));
import ProductsCarousel from "../components/mainPage/ProductsCarousel";
import { lazy, Suspense } from "react";
import Spinners from "../components/shared/Spinners";

function Home() {
  return (
    <div className="flex flex-col gap-20">
      <SwiperImageMain />
      <TitleMain>Product categories</TitleMain>
      <LogoMainComponent />
      <TitleMain>happiness articles</TitleMain>
      <Suspense fallback={<Spinners />}>
        <GetData />
      </Suspense>
      <TitleMain>happiness Prodacts</TitleMain>
      <ProductsCarousel />
    </div>
  );
}

export default Home;
