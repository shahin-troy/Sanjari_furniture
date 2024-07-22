/* eslint-disable react/prop-types */
import { useState } from "react";

import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";
import SideBar from "./SideBar";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex top-0 fixed items-center w-full z-50 justify-between h-20 border-b-2 bg-stone-950 font-Vazir border-emerald-400/40">
      <Logo />
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <SideBar isOpen={isOpen} ></SideBar>
    </header>
  );
}
