import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Summary from './Summary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Summary />
    
  </StrictMode>,
)
