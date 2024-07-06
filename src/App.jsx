import { useState } from "react";
import "./App.css";
import HamburgerMenu from "../components/HamburgerMenu";
import Header from "../components/header";
import SideBar from "../components/SideBar";
import Poster from "../components/Poster";
import Logo from "../components/Logo";
// import Slider from "../components/Slider";
import ProductSection from "../components/productSection";
import MattressSection from "../components/MattressSection";


const bonelMattress = [
  { id: 1, type: "bonel", name: "بونل 1", src: "/mattress/bonel.jpg" },
  { id: 2, type: "bonel", name: "بونل 2", src: "/mattress/bonel.jpg" },
  { id: 3, type: "bonel", name: "بونل 3", src: "/mattress/bonel.jpg" },
  { id: 4, type: "bonel", name: "بونل 4", src: "/mattress/bonel.jpg" },
  { id: 5, type: "bonel", name: "بونل5", src: "/mattress/bonel.jpg" },
];
const poster = [
  { id: 0, src: "/poster/mohit0.jpg" },
  { id: 1, src: "/poster/mohit1.jpg" },
  { id: 2, src: "/poster/mohit4.jpg" },
  { id: 3, src: "/poster/mohit2.jpg" },
  { id: 4, src: "/poster/photo_2024-07-01_00-18-46.jpg" },
  { id: 5, src: "/poster/mohit-up-1.jpg" },
  { id: 6, src: "/poster/mohit-up-2.jpg" },
]
console.log(bonelMattress);
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header>
        <Logo />
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </Header>

      <SideBar isOpen={isOpen}></SideBar>
      <Poster bonelMattress={poster} />

      <MattressSection  />

      {/* <Slider /> */}
      <ProductSection />

    </>
  );
}

export default App;
