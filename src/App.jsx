import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MattressItem from "../pages/MattressItem";

import { useNavigationType } from "react-router-dom";
import { useEffect } from "react";

function ScrollToTop() {
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [navigationType]);

  return null;
}

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
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/mattressItem/:id",
    element: (
      <>
        {" "}
        <ScrollToTop /> <MattressItem ultraMattress={ultraMattress} />{" "}
      </>
    ),
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
