import "../src/App.css";
import Header from "../components/header";
import Poster from "../components/Poster";
import ProductSection from "../components/productSection";
import MattressSection from "../components/MattressSection";
import Footer from "../components/Footer";

const ultraMattress = [
  {
    id: 0,
    type: "ultraPlus",
    name: "اولترا پلاس + محافظ",
    min: "14,190,000",
    max: "31,540,000",
    src: "/mattress/plus.jpg",
  },
  {
    id: 1,
    type: "ultra1",
    name: "اولترا 1",
    min: "8,500,000",
    max: "18,890,000",
    src: "/mattress/ultra.jpg",
  },
  {
    id: 2,
    type: "ultra2",
    name: "اولترا 2",
    min: "7,500,000",
    max: "16,670,000",
    src: "/mattress/ultra.jpg",
  },
  {
    id: 3,
    type: "ultra3",
    name: "اولترا 3",
    min: "6,550,000",
    max: "14,560,000",
    src: "/mattress/ultra.jpg",
  },
  {
    id: 4,
    type: "ultra4",
    name: "اولترا 4",
    min: "5,900,000",
    max: "13,120,000",
    src: "/mattress/ultra.jpg",
  },
  {
    id: 5,
    type: "ultra5",
    name: "اولترا 5",
    min: "5,300,000",
    max: "11,780,000",
    src: "/mattress/ultra.jpg",
  },
];

const bonelMattress = [
  {
    id: 1,
    type: "bonel1",
    name: "بونل 1",
    min: "5,890,000",
    max: "11,780,000",
    src: "/mattress/bonel.jpg",
  },
  {
    id: 2,
    type: "bonel2",
    name: "بونل 2",
    min: "4,650,000",
    max: "10,340,000",
    src: "/mattress/bonel.jpg",
  },
  {
    id: 3,
    type: "bonel3",
    name: "بونل 3",
    min: "4,100,000",
    max: "9,120,000",
    src: "/mattress/bonel.jpg",
  },
  {
    id: 4,
    type: "bonel4",
    name: "بونل 4",
    min: "3,500,000",
    max: "7,780,000",
    src: "/mattress/bonel.jpg",
  },
  {
    id: 5,
    type: "bonel5",
    name: "بونل 5",
    min: "3,300,000",
    max: "6,670,000",
    src: "/mattress/bonel.jpg",
  },
];
const poster = [
  { id: 0, src: "/poster/mohit0.jpg" },
  { id: 1, src: "/poster/mohit1.jpg" },
  { id: 2, src: "/poster/mohit4.jpg" },
  { id: 3, src: "/poster/mohit2.jpg" },
  { id: 4, src: "/poster/photo_2024-07-01_00-18-46.jpg" },
  { id: 5, src: "/poster/mohit-up-1.jpg" },
  { id: 6, src: "/poster/mohit-up-2.jpg" },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <Poster poster={poster} />
      <ProductSection />
      <MattressSection
        bonelMattress={bonelMattress}
        ultraMattress={ultraMattress}
      />
      <Footer />
    </>
  );
}
