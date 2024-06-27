/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

export default function SideBar({ isOpen, children }) {
  const [delay, isDelay] = useState(false);
  
  useEffect(function(){
    isOpen&& setTimeout(() => isDelay(true), 500);
return function (){isDelay(false)}  
  },[isOpen])
  return (
    <>
      <div
        className={`bg-gray-900 ${
          isOpen ? "w-8/12" : "w-0"
        } h-screen absolute top-0 left-0 transition-all z-50 border-r border-blue-500/55 `}
      >
        {children}
        {isOpen&& delay&& (
          <div className="p-1 mt-20 mr-5 text-base text-teal-200 border border-t-0 border-l-0 border-yellow-400 rounded-lg font-Vazir w-fit">
            در انتظار پیشنهادات <span className="text-cyan-400">مهندس</span>😉
          </div>
        )}
      </div>
    </>
  );
}
