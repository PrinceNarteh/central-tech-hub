import About from "./components/About";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <Navbar />
      <Slider src="hero.jpg" />
      {/* <ImageSlider /> */}
      <About />
      <Offer />
      <Footer />
    </>
  );
}

export default App;
