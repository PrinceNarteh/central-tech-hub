import { ChooseUs } from "../../components/ChooseUs/ChooseUs";
import { Feature } from "../../components/Feature/Feature";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import InfoSection from "../../components/InfoSection/InfoSection";
import Offer from "../../components/Offer/Offer";
import { OurCompany } from "../../components/OurCompany/OurCompany";
import { Service } from "../../components/Service/Service";
import { Welcome } from "../../components/Welcome/Welcome";
import { aboutSection } from "./HomeData";

const Home = () => {
  return (
    <div>
      <ImageSlider />
      {/* <InfoSection {...aboutSection} /> */}
      <Welcome />
      <Feature />
      <Service />
      <OurCompany />
      <ChooseUs />
      {/* <Offer /> */}
    </div>
  );
};

export default Home;
