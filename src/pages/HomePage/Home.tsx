import ImageSlider from "../../components/ImageSlider/ImageSlider";
import InfoSection from "../../components/InfoSection/InfoSection";
import Offer from "../../components/Offer/Offer";
import { Welcome } from "../../components/Welcome/Welcome";
import { aboutSection } from "./HomeData";

const Home = () => {
  return (
    <div>
      <ImageSlider />
      {/* <InfoSection {...aboutSection} /> */}
      <Welcome />
      {/* <Offer /> */}
    </div>
  );
};

export default Home;
