/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
// const products = ["تشک", "مبل", " سرویس خواب", "صندلی", "میز TV"];

export default function ProductSection({section,setSection}) {
  function selectedItem(e) {
    let ss = document.querySelectorAll('[datatype="products-item"]');
    ss.forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
  }

  return (
    <>
      <div
        datatype="products-item"
        onClick={selectedItem}
        className="w-[96%] mx-auto rounded-full py-2 bg-slate-950 border-yellow-300 border-t-0 border-b-0 border-3 mt-6 flex justify-between items-center px-2 text-sm sm:text-base font-Vazir md:text-lg text-emerald-200 "
      >
          <div onClick={()=>setSection("mattress")}
            datatype="products-item"
            className={` ${
              section == "mattress" && "active"
            } px-[10px] py-[6px] transition-all border border-teal-600 rounded-full cursor-pointer sm:px-5`}
          >
            تشک
          </div>
          <div onClick={()=>setSection("lunchTable")}
            datatype="products-item"
            className={` ${
              section == "تشک" && "active"
            } px-[10px] py-[6px] transition-all border border-teal-600 rounded-full cursor-pointer sm:px-5`}
          >
میز نهار خوری
          </div>
          <div
            datatype="products-item"
            className={` ${
              section == "تشک" && "active"
            } px-[10px] py-[6px] transition-all border border-teal-600 rounded-full cursor-pointer sm:px-5`}
          >
مبل
          </div>
          <div
            datatype="products-item"
            className={` ${
              section == "تشک" && "active"
            } px-[10px] py-[6px] transition-all border border-teal-600 rounded-full cursor-pointer sm:px-5`}
          >
صندلی
          </div>
          <div
            datatype="products-item"
            className={` ${
              section == "تشک" && "active"
            } px-[10px] py-[6px] transition-all border border-teal-600 rounded-full cursor-pointer sm:px-5`}
          >
میزTV
          </div>

        {/* <div className="">ساعت</div> */}
        {/* <div className="">آینه</div> */}
        {/* <div className="">کمد</div> */}
        {/* <div className="">دکور</div> */}
      </div>
    </>
  );
}
