import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./  "

//meeting-4
import Form from "./meeting/meeting-4/Praktek/fragment/form.jsx";
import Header from "./meeting/meeting-4/Praktek/fragment/header.jsx";
import Login from "./meeting/meeting-4/Praktek/layout/login.jsx";
import Register from "./meeting/meeting-4/Praktek/layout/register.jsx";
import Pages from "./meeting/meeting-4/Praktek/page/page.jsx";
//meeting-5

//meeting-8
import Array2 from "./meeting/meeting-8/coba/coba-array-8.jsx";
import Numberss from "./meeting/meeting-8/coba/coba-number-8.jsx";
import Counter from "./meeting/meeting-8/praktek/soal-1.jsx";
import LoginStatus from "./meeting/meeting-8/praktek/soal-2.jsx";
import SimpleCalculator from "./meeting/meeting-8/praktek/soal-3.jsx";
//meeting-9
import SimpleNameList from "./meeting/meeting-9/coba/coba-array-9.jsx";
import UpdateStateWithMap from "./meeting/meeting-9/coba/coba-map-9.jsx";
import Produk from "./meeting/meeting-9/praktek/product/soal1.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Produk />
  </StrictMode>
);