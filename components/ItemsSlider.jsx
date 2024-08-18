/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import 'swiper/effect-utils'

export default function ItemsSlider({poster}) {
  return (
    <Swiper
        className="w-[90%] max-w-96 mt-4 h-fit rounded-3xl"
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
        {poster&& poster.map((item) => (
          <SwiperSlide  key={item.id} className=" relative " >
            <p className="absolute right-1 top-1 rounded-full px-4 font-Vazir text-yellow-300 py-0.5 bg-slate-950 text-sm">  {item.type}</p>
            <p className="absolute right-1 top-8 rounded-full px-4 font-Vazir text-yellow-300 text-sm py-0.5 bg-slate-950">کد {item.code}</p>
          <img src={item.src} key={item.id} alt="" className="w-full " />
          <div className="w-full h-16 absolute bottom-0 gram-gradiant "> 
          <p className="font-Vazir text-end mr-3 text-sm text-emerald-300 mt-1">
          {item.price} :قیمت</p>
           </div>
     
          </SwiperSlide>
        ))}
      </Swiper>
  )
}
