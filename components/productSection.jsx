/* eslint-disable react/no-unknown-property */
const products = ["تشک", "مبل", " سرویس خواب", "صندلی", "میز TV"];

export default function ProductSection() {
  function selectedItem(e) {
    let ss = document.querySelectorAll('[datatype="products-item"]');
    ss.forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
  }
  return (
    <>
      <div
        onClick={selectedItem}
        className="w-[96%] mx-auto rounded-lg min-h-14 bg-slate-950 border border-blue-400 mt-6 flex justify-between items-center px-2 text-sm sm:text-base font-Vazir md:text-lg text-emerald-200"
      >
        {products.map((product) => (
          <div
            datatype="products-item"
            key={product}
            className={` ${product=="تشک"&& "active" } px-3 py-1 transition-all border border-teal-600 rounded-full cursor-pointer sm:px-5`}
          >
            {product}{" "}
          </div>
        ))}

        {/* <div className="">ساعت</div> */}
        {/* <div className="">آینه</div> */}
        {/* <div className="">کمد</div> */}
        {/* <div className="">دکور</div> */}
      </div>
    </>
  );
}
