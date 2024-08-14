/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import 'swiper/effect-utils'
import { Link } from "react-router-dom";


export default function Slider({poster}) {
  return (
    <>
      <Swiper
        className="w-[97%] mt-4 h-fit"
        dir="ltr"
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
        freeMode={false}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Navigation, Autoplay]}
        // autoplay={{ // autoplay settings
        //   delay: 3000, // Delay between slides in milliseconds
        //   disableOnInteraction: false, // Autoplay will not be disabled after user interaction
        // }}
        navigation
      >
        {poster&& poster.map((item) => (
          <SwiperSlide  key={item.id}>
          <Link to={`mattressItem/${item.type}`} >

            <div className={`mx-auto relative lg:w-2/3 w-[100%%] rounded-3xl overflow-hidden cursor-pointer`} >
              <img src={item.src} className="relative w-full lg:rounded-3xl" />
              <div className="absolute flex flex-col items-end right-2 top-2 font-Vazir ">
                <p className="px-5 py-1 rounded-full bg-slate-900">{item.name} </p>
                <p dir="rtl" className="px-4 py-1 pt-2 mt-1 text-xs text-yellow-300 rounded-full bg-violet-950"> {item.min} تا {item.max} تومان</p>
              </div>
            </div>
          </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
