/* eslint-disable react/prop-types */
import Slider from "./Slider";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ultraMattress,bonelMattress } from "../src/staticData";

AOS.init();

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () { AOS.refresh(); }, 500);
});


export default function MattressSection() {
  
  return (
    <>
      <div className="py-2 mt-8 pt-7 bg-slate-950 border-teal-300/20 border-t-1">
        <img src="/svg/logo-zard.svg" alt="" className="mx-auto w-44 " />
      </div>
      <img src="/svg/wave2.svg" alt="" className="wave" />
      <div className="flex items-center mt-4 border-b-2 border-teal-400 font-Vazir">
        <img src="/svg/mofasal.svg" alt="" className="w-20 " />
        <div data-aos="fade-left" data-aos-duration="500" className="mr-2">
          <span className="text-xl text-yellow-200">تشک های اولترا</span>
          <br />
          <span className="text-sm text-teal-300">فنر منفصل</span>
        </div>
      </div>

      <p className="mt-3 mr-3 text-sm text-red-400 font-Vazir">قیمت هر آیتم متناسب با سایز آن متغیر است.</p>
      <section data-aos="zoom-in" data-aos-duration="800">
        <Slider poster={ultraMattress} />
      </section>

      <div className="flex items-center mt-12 border-b-2 border-teal-400 font-Vazir">
        <img src="/svg/bonel.svg" alt="" className="w-20 " />
        <div data-aos="fade-left" data-aos-duration="800" className="mr-2">
          <span className="text-xl text-yellow-200">تشک های بونل</span>
          <br />
          <span className="text-sm text-teal-300">فنر متصل</span>
        </div>
      </div>

      <p className="mt-3 mr-3 text-sm text-red-400 font-Vazir">قیمت هر آیتم متناسب با سایز آن متغیر است.</p>
      <section data-aos="zoom-in" data-aos-duration="800">
        <Slider poster={bonelMattress} />
      </section>

    </>
  );
}
