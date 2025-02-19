import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";


import Axioshop18 from "./meeting/meeting-18/Praktek-1/jwt-path";
import Menu18 from "./meeting/meeting-18/Praktek-2/menu";
import AxiosStore2 from "./meeting/meeting-18/Praktek-1/jwt-map";




createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <Axioshop18  />
  </StrictMode>
);
