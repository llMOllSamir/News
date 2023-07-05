import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayOut from "./components/LayOut/LayOut";
import Home from "./components/Home/Home";
import ApiContextProvider from "./Context/ApiContext";
import "./App.css";
import General from "./components/General/General";
import Sports from "./components/Sports/Sports";
import Health from "./components/Health/Health";
import Science from "./components/Science/Science";
import Technology from "./components/Technology/Technology";
import Business from "./components/Business/Business";
import NotFound from "./components/NotFound/NotFound";

export default function App() {
  let routs = createBrowserRouter([
    {
      path: "",
      element: <LayOut />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "LatestNews",
          element: <Home />,
        },
        {
          path: "general",
          element: <General />,
        },
        {
          path: "sports",
          element: <Sports />,
        },
        {
          path: "health",
          element: <Health />,
        },
        {
          path: "science",
          element: <Science />,
        },
        {
          path: "technology",
          element: <Technology />,
        },
        {
          path: "Economy",
          element: <Business />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <ApiContextProvider>
      <RouterProvider router={routs}></RouterProvider>
    </ApiContextProvider>
  );
}
