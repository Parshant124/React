import { useState, useCallback, useEffect, useRef  } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(7)
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [characterAllowed, setcharacterAllowed] = useState(false);
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    console.log("executed")
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(characterAllowed) str+="!@#$%^&*(){}[]~|"

    for(let i=1; i<= length; i++){
      let ind = Math.floor(Math.random() * str.length + 1)
      pass += str[ind]
    }
    setPassword(pass)
    document.getElementById('copyButton').innerText = "copy"
  }, [length, numberAllowed, characterAllowed, setPassword])
  
  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
    document.getElementById('copyButton').innerText = "copied"
  },[password])


  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, characterAllowed ])
  return (
    <>
      <h1 className="text-center text-3xl font-bold bg-green-100">Password Generator</h1>
      <div className="w-full max-w-md mx-auto rounded-lg my-8 px-4 py-3 text-orange-500 bg-gray-700 text-center">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-white rounded-xl'
          placeholder='password'
          ref={passwordRef}
          />
          <button 
          className="bg-green-300 px-4 rounded-lg text-black font-bold"
          onClick={copyPassword}
          id="copyButton"
          >copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
            type="range"
            min={6}
            max={45}
            value={length}
            className="curson-pointer"
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>{length} </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={()=>{setnumberAllowed((prev)=>!prev)}}
            />
            <label className="text-green-200 px-2">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={characterAllowed}
            onChange={()=>{setcharacterAllowed((prev)=>!prev)}}
            />
            <label className="text-green-200 px-2">Characters</label>
          </div>
          
        </div>
      </div>

    </>
  )
}

export default App