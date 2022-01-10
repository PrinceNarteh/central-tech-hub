import About from "../../components/About";
import Footer from "../../components/Footer";
import InfoSection from "../../components/InfoSection/InfoSection";
import Offer from "../../components/Offer";
import Slider from "../../components/Slider";
import { aboutSection } from "./HomeData";

const Home = () => {
  return (
    <div>
      <Slider src="hero.jpg" />
      <InfoSection {...aboutSection} />
      {/* <ImageSlider /> */}
      {/* <About />
      <Offer />
      <Footer /> */}
    </div>
  );
};

export default Home;
