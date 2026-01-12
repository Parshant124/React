import { StrictMode } from 'react'
import React from "react";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import PracFunc from './Custom'

const customElement = (
  <h1>This is a customElement, and it is a object but syntax is different</h1>
)

// creating custom react element
const CustomElem = React.createElement(
  'a', // define type
  {href: 'https://www.google.com', target: '_blank'}, // set Attributes, leave{} empty if no attributes
  'click here' // direct Text
)

createRoot(document.getElementById('root')).render(

<StrictMode>
  <>
    <App />
    <PracFunc /> 
    {CustomElem}
  </>
  </StrictMode>
)
