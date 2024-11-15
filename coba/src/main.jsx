import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Apps from './App.jsx'
import ParentComponent from './props/props.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Apps />
  </StrictMode>,
)

