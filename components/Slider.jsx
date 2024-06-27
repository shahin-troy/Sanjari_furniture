// import { Accordion, AccordionItem } from "@nextui-org/react";

// // import {
// //   Accordion,
// //   AccordionContent,
// //   AccordionItem,
// //   AccordionTrigger,
// // } from "@/components/ui/accordion";

// export default function Slider() {
//   const defaultContent =
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

//   return (
//     <div className="!text-red-100 w-3/4 mx-auto  rounded-lg mt-8   ">
//       <Accordion
//         isCompact
//         itemClasses={{ title: "!text-teal-100", content: "bg-gray-950" }}
//         variant="splitted"
//       >
//         <AccordionItem
//           key="1"
//           aria-label="Accordion 1"
//           title="Accordion 1"
//           className="p-1 border-teal-300 rounded-lg !bg-gray-950 border-r-1 border-b-1"
//         >
//           {defaultContent}
//         </AccordionItem>
//         <AccordionItem
//           key="2"
//           aria-label="Accordion 2"
//           title="Accordion 2"
//           className="p-1 border-teal-300 rounded-lg !bg-gray-950 border-r-1 border-b-1 "
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

import { Carousel  } from "antd";

export default function Slider() {
  return (
    <>

    <div className="w-[95%] lg:w-1/3 border border-emerald-900 mx-auto mt-12 overflow-hidden rounded-xl ">
      <Carousel autoplay draggable={true} arrows>
        <div>
          <img className="w-full " src="/pics/0.jpg" alt="" />
        </div>
        <div>
          <img className=" h-52" src="/pics/Shahin2.jpg" alt="" />
        </div>
        <div>
          <img className="w-full " src="/pics/000.png" alt="" />
        </div>
      </Carousel>
    </div>
    </>
  );
}
