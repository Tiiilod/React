import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'


//meeting-9
import Produk from "./meeting/meeting-9/Praktek/soal1.jsx";
//meeting-10
import Nodependency from './meeting/meeting-10/coba/nodependency.jsx';
import Withdepedency from './meeting/meeting-10/coba/withdependency.jsx';
import Soal1 from "./meeting/meeting-10/Praktek/soal1.jsx";
import CounterLogger from './meeting/meeting-10/Praktek/soal2.jsx';
import App from './meeting/meeting-10/Praktek/contoh.jsx';
//meeting-11
import UseOnlineStatus from './meeting/meeting-11/coba/coba-1.jsx';
import {StatusBar} from './meeting/meeting-11/coba/coba-2.jsx';
import {GantiTema} from './meeting/meeting-11/praktek/soal1.jsx';
import {CekTask} from './meeting/meeting-11/praktek/soal2.jsx';
//meeting-12





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CekTask />
  </StrictMode>,
)
