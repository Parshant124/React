import { useState } from 'react'
import './App.css'
import Summary01 from './Summary/Summary01.jsx'
import Summary02 from './Summary/Summary02.jsx'
import Summary03 from './Summary/Summary03.jsx'
import Summary04 from './Summary/Summary04.jsx'
import Summary05 from './Summary/Summary05.jsx'
import Summary06 from './Summary/Summary06.jsx'
import Summary07 from './Summary/Summary07.jsx'

function App() {
  const [page, setPage] = useState(1)

  return (
    <>
      <div className="bg-gray-400 p-4">
        <h1 
        className="text-3xl text-green-300 text-center font-bold"
        >Summary of Chai aur React</h1>
      </div>
      <div>
        <button
        className=" bg-green-400 rounded-xl p-4 mx-4 my-4 font-bold"
        onClick={()=>setPage(1)}
        >Summary 1
        </button>
        <button
        className=" bg-yellow-500 rounded-xl p-4 mx-4 my-4 font-bold"
        onClick={()=>setPage(2)}
        >Summary 2
        </button>
        <button
        className=" bg-red-600 rounded-xl p-4 mx-4 my-4 font-bold"
        onClick={()=>setPage(3)}
        >Summary 3
        </button>
        <button
        className=" bg-blue-400 rounded-xl p-4 mx-4 my-4 font-bold"
        onClick={()=>setPage(4)}
        >Summary 4
        </button>
        <button
        className=" bg-orange-800 rounded-xl p-4 mx-4 my-4 font-bold"
        onClick={()=>setPage(5)}
        >Summary 5
        </button>
        <button
        className=" bg-blue-600 rounded-xl p-4 mx-4 my-4 font-bold"
        onClick={()=>setPage(6)}
        >Summary 6
        </button><button
        className=" bg-yellow-300 rounded-xl p-4 mx-4 my-4 font-bold"
        onClick={()=>setPage(7)}
        >Summary 7
        </button>
      </div>
      <div>
        {page==1 && <Summary01 />}
        {page==2 && <Summary02 />}
        {page==3 && <Summary03 />}
        {page==4 && <Summary04 />}
        {page==5 && <Summary05 />}
        {page==6 && <Summary06 />}
        {page==7 && <Summary07 />}
      </div>
    </>
  )
}

export default App
