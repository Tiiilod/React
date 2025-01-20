import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App4 from "./meeting/meeting-12/praktek/soal1.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App4 />
  </StrictMode>
);
