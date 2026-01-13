import { useState } from 'react'


// Hooks are used to update value present at multiple places on a single click
// Write everything inside the App function

function App() {

  const addValue = ()=>{
    if(count<20)
    setCount(count+1)
  }
  const subValue = ()=>{
    if(count>0)
    setCount(count-1)
  }

  let [count, setCount] = useState(10)
  // it returns two values, first the variable and other function to change the variable in future
  // you can name it anything not hard coded

  return (
    <>
      <h1>{count}</h1>
      <h2>Current count : {count}</h2>

      <button onClick = {addValue} >Add Value</button>
      <button onClick = {subValue} >Sub Value</button>

    </>
  )
}

export default App