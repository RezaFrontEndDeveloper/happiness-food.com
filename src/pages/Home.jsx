import LogoMainComponent from "../components/mainPage/LogoMainComponent";
import SwiperImageMain from "../components/mainPage/SwiperImageMain";
import TitleMain from "../components/mainPage/TitleMain";
import GetData from "../components/GetData";
function Home() {
  return (
    <div className="flex flex-col gap-20">
      <SwiperImageMain />
      <TitleMain>Product categories</TitleMain>
      <LogoMainComponent />
      <TitleMain>happiness articles</TitleMain>
      <GetData />
    </div>
  );
}

export default Home;
