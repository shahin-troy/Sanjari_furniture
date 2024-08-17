
export default function Banner() {
  return (
    <div className="relative  rounded-md w-full mt-8 mb-4 mx-auto font-Vazir bg-slate-950 pt-4 pb-5">
        <p className="font-Vazir text-emerald-300 text-lg text-center">شرایط خرید اقساط</p>
        <p className="font-Vazir text-lg text-center mt-2 mb-4 text-yellow-200">داشتن حداقل یکی از موارد ذیل:</p>
        <ul className="flex flex-wrap gap-y-4  list-inside list-decimal px-2">
            <li className="w-full text-violet-300 text-sm ">یک فقره چک صیادی معتبر</li>
            <li className="w-full text-violet-300 text-sm ">  فیش حقوقی یا حکم کارگزینی ( کارمندان محترم ) </li>
            <li className="w-full text-violet-300 text-sm">داشتن ضامن یا معرف معتبر</li>
            <li className="w-full text-violet-300 text-sm">طلا</li>
        </ul>
        <p className="text-center mt-11  text-teal-300 text-sm"> (( کپی کارت ملی الزامی می باشد )) </p>
        <img src="/logo/0.png" alt="" className="w-[45%] absolute bottom-10 left-0" />
    </div>
  )
}
