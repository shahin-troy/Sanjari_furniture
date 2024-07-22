import { useParams } from "react-router-dom";
import Header from "../components/header";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import "swiper/effect-utils";

const ultraPics = [
  "/mattress/ultraplus-page-0.jpg",
  "/mattress/ultraplus-page-1.jpg",
  "/mattress/ultraplus-page-2.jpg",
  "/mattress/ultra-plus-page-3.jpg",
];

// eslint-disable-next-line react/prop-types
export default function MattressItem({ ultraMattress }) {
  let { id } = useParams();
  console.log(ultraMattress);
  // eslint-disable-next-line react/prop-types
  let selected = ultraMattress.find((item) => item.type == id);
  console.log(selected);
  return (
    <>
    
      <Header />
      <main className="w-full h-fit  mt-20">
        <div className="w-full  text-yellow-100 mx-auto min-h-12 py-4 bg-stone-950 font-Vazir flex justify-center items-center text-2xl">
          {selected.name}
        </div>

        <Swiper
          className="w-[97%]  h-fit"
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
          {ultraPics.map((item) => (
            <SwiperSlide key={item}>
              <div
                className={`mx-auto relative lg:w-2/3 w-[100%%] rounded-3xl overflow-hidden cursor-pointer`}
              >
                <img
                  src={item}
                  className="relative w-full lg:rounded-3xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <p className="text-justify py-4 text-sm px-4 font-Vazir text-white/70 leading-[26px]">تشک‌های فنر منفصل عموماً دارای تعداد فنرهای بیشتری هستند. این تشک‌ها حاوی فنرهایی جداگانه بوده که هر کدام در یک پارچه مستقل محصور شده است و به جای آنکه به طور معمول از بالا به هم پیوند خورده باشند در قسمت های میانی به هم متصل شده‌اند و این خصوصیت منجر خواهد شد که هر فنر به طور کاملاً مستقل از دیگری عمل نماید. در تشک‌های سنتی فنری (فنر متصل)، با حرکت هریک از فنرها، سایر فنرهای اطراف نیز تحت تاثیر آن، حرکت خواهند نمود. بنابراین با حرکت و غلت زدن یک نفر بر روی تشک، این حرکت به کل سطح تشک منتقل شده و از طریق شخص مجاور احساس خواهد شد که می‌تواند احساس آرامش را از شخص مذبور سلب نماید.</p>
      </main>
      <ul className="mr-8 flex flex-col gap-1 mb-14 font-Vazir ">
        <li className="list-disc text-teal-200/85">اسفنج برش خورده CNC</li>
        <li className="list-disc text-teal-200/85">اسکلت فنر منفصل</li>
        <li className="list-disc text-teal-200/85">فنر سلولی</li>
        <li className="list-disc text-teal-200/85">فوم HR</li>
        <li className="list-disc text-teal-200/85">پارچه ویسکوز</li>
        <li className="list-disc text-teal-200/85">به همراه محافظ تشک</li>
        <li className="list-disc text-teal-200/85">ضمانت 9 سال</li>
        <li className="list-disc text-teal-200/85">ارتفاع 1 ± 35 سانتیمتر</li>
      </ul>
    </>
  );
}
