import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Apps from './App.jsx'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Apps />
  </StrictMode>,
)
