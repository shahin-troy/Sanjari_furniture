/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import 'swiper/effect-utils'

export default function ItemsSlider({ poster }) {
  return (
    <Swiper
      className="w-[90%] max-w-96 mt-4 h-fit rounded-2xl"
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
      modules={[FreeMode, Navigation, Autoplay]}
      // autoplay={{ // autoplay settings
      //   delay: 3000, // Delay between slides in milliseconds
      //   disableOnInteraction: false, // Autoplay will not be disabled after user interaction 
      // }}
      navigation
    >
      {poster && poster.map((item) => (
        <SwiperSlide key={item.id} className=" relative " >
          <p className="absolute right-1 top-1 rounded-full px-4 font-Vazir text-teal-100 py-0.5 bg-slate-950 text-sm">  گرامافون {item.type}</p>

          <img src={item.src} key={item.id} alt="" className="w-full " />
          <p dir="rtl" className="absolute top-8 right-1 flex items-center bg-slate-950 text-teal-100 font-Vazir text-sm pt-1 pb-0.5 px-4 rounded-full">{item.price} تومان</p>

          <span className="absolute bottom-9 right-0 font-Vazir text-yellow-300 bg-blue-600 px-3 rounded-s-full py-0.5"> :مشخصات  </span>

          <span className="absolute bottom-1 right-2 font-Vazir text-violet-200 bg-purple-950 px-3 rounded-full py-0.5"> usb port  </span>
          <span className="absolute bottom-1 right-[6.5rem] font-Vazir text-yellow-100 bg-purple-950 px-3 rounded-full py-0.5"> بلوتوث  </span>
          <span className="absolute bottom-1 left-2 font-Vazir text-yellow-100 bg-purple-950 px-3 rounded-full py-0.5"> رادیو  </span>
          <span className="absolute bottom-1 right-44 font-Vazir text-yellow-100 bg-purple-950 px-3 rounded-full py-0.5"> گارانتی معتبر  </span>



        </SwiperSlide>
      ))}
    </Swiper>
  )
}
