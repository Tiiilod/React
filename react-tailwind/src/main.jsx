import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Produk from "./meeting/meeting-9/Praktek/soal1.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Produk />
  </StrictMode>,
)
