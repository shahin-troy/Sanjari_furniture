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


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/mattressItem/:mattressType",
    element: (
      <>
        {" "}
        <ScrollToTop /> <MattressItem  />{" "}
      </>
    ),
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
