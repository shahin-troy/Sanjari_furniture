// import { Accordion, AccordionItem } from "@nextui-org/react";

// // import {
// //   Accordion,
// //   AccordionContent,
// //   AccordionItem,
// //   AccordionTrigger,
// // } from "@/components/ui/accordion";

// export default function Slider() {
//   const defaultContent =
//     "بهترین وسایل خواب ";

//   return (
//     <div className="!text-red-100 w-3/4 mx-auto  rounded-lg mt-8   ">
//       <Accordion
//         itemClasses={{ title: "!text-teal-100", content: "bg-gray-950" }}
//         variant="splitted"
//       >
//         <AccordionItem
//           key="1"
//           aria-label="Accordion 1"
//           title="تشک"
//           className="p-1 mb-2 border-teal-300 rounded-lg !bg-gray-950 border-r-1 border-b-1 font-Vazir"
//         >
//           {defaultContent}
//         </AccordionItem>
//         <AccordionItem
//           key="2"
//           aria-label="Accordion 2"
//           title="مبل"
//           className="p-1 border-teal-300 rounded-lg !bg-gray-950 border-r-1 border-b-1 font-Vazir"
//         >
//           {defaultContent}
//         </AccordionItem>
//         <AccordionItem
//           key="3"
//           aria-label="Accordion 3"
//           title="Accordion 3"
//           className="p-1 border-teal-300 rounded-lg !bg-gray-950 border-r-1 border-b-1"
//         >
//           {defaultContent}
//         </AccordionItem>
//       </Accordion>
//     </div>
//   );
// }

import { Carousel } from "antd";

const pics = ["/pics/0.jpg", "/pics/Shahin2.jpg", "/pics/000.png"];

export default function Slider() {
  return (
    <>
      <div className="w-[97%] lg:w-1/3 border border-emerald-900 mx-auto mt-4 overflow-hidden rounded-xl ">
        <Carousel autoplay draggable={true} arrows>
          {pics.map((item) => (
            <div key={item}>
              <img
                src={item}
                className={`${item.includes("Shahin2") ? "" : "w-full"}  h-52`}
                alt=""
              />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
