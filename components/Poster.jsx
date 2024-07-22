/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import 'swiper/effect-utils'



export default function Poster({ poster }) {
  return (
    <>
      <Swiper
        effect="fade"
        loop={true}
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Navigation, Autoplay]}
        autoplay={{ // autoplay settings
          delay: 3000, // Delay between slides in milliseconds
          disableOnInteraction: false, // Autoplay will not be disabled after user interaction
        }}
        navigation
        className="w-full mt-24 h-fit"
      >
        {poster.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={`mx-auto relative lg:w-2/3 w-[100%%] rounded-3xl overflow-hidden`} >
              <img src={item.src} alt="" className="relative w-full lg:rounded-3xl" />
              {/* <div className="absolute bottom-0 w-full h-10 bg-sky-400/80 "> */}
                <img src="/svg/Wave-b-darkBlue.svg" alt="" className="absolute bottom-0 w-full h-20 " />
              {/* </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
