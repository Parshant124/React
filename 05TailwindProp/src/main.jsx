import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './components/Card.jsx'
import Card2 from './components/Card2.jsx'

const myArr = [1,2,3,4,5]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card name="Parshant" role="Frontend Developer" ID="2026DEV01"/>
    <Card name="React-Vite" role="Making websites" ID="2137824"/>
    <Card2 name="Parshant" role="Backend" ID="2026DEV01"/>
    <Card2 name="React-Vite" role="Making apps" ID="2137824"/>
  </StrictMode>,
)