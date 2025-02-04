import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LoginMas from "./meeting/meeting-17/praktek-1/jwt-login";
import Axioshop17 from "./meeting/meeting-17/praktek-1/jwt-path";
import Menu from "./meeting/meeting-17/praktek-2/menu";




createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <Menu  />
  </StrictMode>
);
