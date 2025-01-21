import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App4 from "./meeting/meeting-12/praktek/soal1.jsx";
// meeting-13
import CobaAxios from "./meeting/meeting-13/coba/GetAPI.jsx";
import CobaAxios2 from "./meeting/meeting-13/praktek/soal1.jsx";
import AxiosStore from "./meeting/meeting-13/praktek/soal2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <AxiosStore/>
  </StrictMode>
);
