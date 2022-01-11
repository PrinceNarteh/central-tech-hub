import { sliderData } from "../pages/HomePage/HomeData";
import Slider from "./Slider/Slider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const ImageSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay, EffectFade]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={true}
      autoplay={{ delay: 5000 }}
      speed={2000}
      effect="fade"
    >
      {sliderData.map((info, idx) => (
        <SwiperSlide key={idx}>
          <Slider {...info} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
