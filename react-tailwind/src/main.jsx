import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'


//meeting-9
import Produk from "./meeting/meeting-9/Praktek/soal1.jsx";
//meeting-10
import Soal1 from "./meeting/meeting-10/Praktek/soal1.jsx";
import CounterLogger from './meeting/meeting-10/Praktek/soal2.jsx';
import App from './meeting/meeting-10/Praktek/contoh.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
