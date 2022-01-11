import ImageSlider from "../../components/ImageSlider/ImageSlider";
import InfoSection from "../../components/InfoSection/InfoSection";
import Offer from "../../components/Offer/Offer";
import { aboutSection } from "./HomeData";

const Home = () => {
  return (
    <div>
      <ImageSlider />
      <InfoSection {...aboutSection} />
      <Offer />
    </div>
  );
};

export default Home;
