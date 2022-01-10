import InfoSection from "../../components/InfoSection/InfoSection";
import Offer from "../../components/Offer/Offer";
import Slider from "../../components/Slider/Slider";
import { aboutSection, sliderData } from "./HomeData";

const Home = () => {
  return (
    <div>
      <Slider {...sliderData} />
      <InfoSection {...aboutSection} />
      {/* <ImageSlider /> */}
      <Offer />
    </div>
  );
};

export default Home;
