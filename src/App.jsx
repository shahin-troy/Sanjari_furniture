import { useState } from "react";
import "./App.css";
import HamburgerMenu from "../components/HamburgerMenu";
import Header from "../components/header";
import SideBar from "../components/SideBar";
import Poster from "../components/Poster";
import Logo from "../components/Logo";
import Slider from "../components/Slider";
import Tab from "../components/Tab";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header>
        <Logo />
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </Header>

      <SideBar isOpen={isOpen}></SideBar>
      <Poster />


      <Slider />
      <Tab />
    </>
  );
}

export default App;
