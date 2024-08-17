import "../src/App.css";
import Header from "../components/header";
import Poster from "../components/Poster";
import ProductSection from "../components/productSection";
import MattressSection from "../components/MattressSection";
import Footer from "../components/Footer";
import LunchTable from "../components/lunchTable";
import { useState } from "react";
import Banner from "../components/Banner";


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
  const [section, setSection] = useState("mattress");
  return (
    <>
      <Header />
      <Poster poster={poster} />
      <Banner/>
      <ProductSection section={section} setSection={setSection} />
      {section == "mattress" && (
        <MattressSection />
      )}
      {section == "lunchTable" && <LunchTable />}
      <Footer />
    </>
  );
}
