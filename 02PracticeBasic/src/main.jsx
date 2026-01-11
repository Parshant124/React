import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import PracFunc from './Custom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <App />
    <PracFunc />
    </>
  </StrictMode>,
)
