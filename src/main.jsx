import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BoxContext from './Context/BoxContext.jsx'

createRoot(document.getElementById('root')).render(
  <BoxContext>
    <App />
  </BoxContext>
)
