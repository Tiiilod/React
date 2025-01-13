import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//meeting-8
import Array2 from './meeting-8/coba/coba-array-8.jsx';
import Numberss from './meeting-8/coba/coba-number-8.jsx';
import Counter from './meeting-8/praktek/soal-1.jsx';
import LoginStatus from './meeting-8/praktek/soal-2.jsx';
import SimpleCalculator from './meeting-8/praktek/soal-3.jsx';
//meeting-9
import SimpleNameList from './meeting/meeting-9/coba/coba-array-9.jsx';
import UpdateStateWithMap from './meeting/meeting-9/coba/coba-map-9.jsx';
import Produk from './meeting/meeting-9/praktek/soal1.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Produk  />
  </StrictMode>,
)

