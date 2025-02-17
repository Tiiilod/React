import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";


import Axioshop17 from "./meeting/meeting-17/praktek-1/jwt-path";
import Menu from "./meeting/meeting-17/praktek-2/menu";
import CreateUser from "./meeting/meeting-17/coba/coba";




createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <CreateUser  />
  </StrictMode>
);
