import ItemsSlider from "./ItemsSlider";

let gram1 = [
  { id: 1, name: "گرامافون", type: "والتر", price: "15,900,000", src: "/gram/walter-brown.jpg" },
  { id: 2, name: "گرامافون", type: "والتر", price: "15,900,000", src: "/gram/walter-brown-2.jpg" },
];
let gram2 = [
  { id: 3, name: "گرامافون", type: "انتیک", price: "16,470,000", src: "/gram/antik-white.jpg" },
  { id: 4, name: "گرامافون", type: "انتیک", price: "16,470,000", src: "/gram/antik-white-2.jpg" },
];
let gram3 = [
  { id: 3, name: "گرامافون", type: "والتر", price: "10,340,000", src: "/gram/walter-brown-r.jpg" },
  { id: 4, name: "گرامافون", type: "والتر", price: "10,340,000", src: "/gram/walter-brown-r-2.jpg" },
];
let gram4 = [
  { id: 3, name: "گرامافون", type: "والتر", price: "10,340,000", src: "/gram/walter-white-r.jpg" },
  { id: 4, name: "گرامافون", type: "والتر", price: "10,340,000", src: "/gram/walter-white-r-2.jpg" },
];

export default function Gramaphone() {
  return (
    <div className="w-full mx-auto flex flex-wrap items-start justify-start h-fit">
      <ItemsSlider poster={gram1} />
      <ItemsSlider poster={gram2} />
      <ItemsSlider poster={gram3} />
      <ItemsSlider poster={gram4} />
    </div>
  );
}
