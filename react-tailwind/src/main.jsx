import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";


// meeting-15
import SimpleUserForm from "./meeting/meeting-15/coba/post.jsx";
import LoginAxios from "./meeting/meeting-15/praktek/soal1.jsx";
import Axioshop2 from "./meeting/meeting-15/praktek/soal2.jsx";
import Login16 from "./meeting/meeting-16/coba/cobaJWT.jsx";
import Axioshop16 from "./meeting/meeting-16/praktek/jwt-path.jsx";
import Axioshop from "./meeting/meeting-14/praktek/soal2.jsx";
import CreateUser from "./meeting/meeting-17/coba/coba.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <CreateUser  />
  </StrictMode>
);
