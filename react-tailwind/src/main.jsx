import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App4 from "./meeting/meeting-12/praktek/soal1.jsx";
// meeting-13
import CobaAxios from "./meeting/meeting-13/coba/GetAPI.jsx";
import CobaAxios2 from "./meeting/meeting-13/praktek/soal1.jsx";
// import AxiosStore from "./meeting/meeting-13/praktek/soal2.jsx";
//meeting-14
import TokoBuku from "./meeting/meeting-14/praktek/soal1.jsx";
import Axioshop from "./meeting/meeting-14/praktek/soal2.jsx";
// meeting-15
import SimpleUserForm from "./meeting/meeting-15/coba/post.jsx";
import LoginAxios from "./meeting/meeting-15/praktek/soal1.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <LoginAxios/>
  </StrictMode>
);
