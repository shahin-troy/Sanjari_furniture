import ItemsSlider from "./ItemsSlider";

let gram1 = [
  { id: 1, name: "گرامافون",type:"والتر",price:"15,900,000",code: 0 , src: "/gramaphone/gram-brown.png.jpg" },
  { id: 2, name: "گرامافون",type:"والتر",price:"15,900,000",code: 0 , src: "/gramaphone/gram-brown2.png.jpg" },
];
let gram2 = [
  { id: 3, name: "گرامافون",type:"انتیک",price:"16,470,000",code: 0 , src: "/gramaphone/gram-sefid.png.jpg" },
  { id: 4, name: "گرامافون",type:"انتیک",price:"16,470,000",code: 0 , src: "/gramaphone/gram-sefid2.png.jpg" },
];

export default function Gramaphone() {
  return (
    <div className="w-full mx-auto flex flex-wrap items-start justify-start h-fit">
      <ItemsSlider poster={gram1} />
      <ItemsSlider poster={gram2} />
    </div>
  );
}
