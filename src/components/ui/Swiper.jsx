// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
export default function SwiperComponent(props) {
  const { images } = props;
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
          pagination={{
        type: "progressbar",
      }}
      modules={[Pagination, Navigation]}
      navigation={true}
    >
      {images.map((image, index) => (
        <SwiperSlide key={`slide-${image}-${index}`} className="w-80 h-80">
          <img src={image} alt="project" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
