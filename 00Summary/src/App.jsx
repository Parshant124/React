import { useState } from 'react'
import './App.css'
import { Summary01, Summary02, Summary03, Summary04, Summary05, Summary06, Summary07, Summary08} from "./Summary";

function App() {
  const [page, setPage] = useState(1)

  return (
    <>
    <div className="bg-gray-700">
      <div className="bg-gray-600 p-4">
        <h1 
        className="text-3xl text-green-300 text-center font-bold"
        >Summary of Chai aur React</h1>
      </div>
      <div>
        <button
        className=" bg-green-400 rounded-xl p-4 mx-4 my-4 font-bold"
        onClick={()=>setPage(1)}
        >Summary 1
        <h2 className="font-normal">(Basic React)</h2>
        </button>
        <button
        className=" bg-yellow-500 rounded-xl p-4 mx-4 my-4 font-bold"
        onClick={()=>setPage(2)}
        >Summary 2
        <h2 className="font-normal">(Hooks)</h2>
        </button>
        <button
        className=" bg-red-600 rounded-xl p-4 mx-4 my-4 font-bold"
        onClick={()=>setPage(3)}
        >Summary 3
        <h2 className="font-normal">(Tailwind css)</h2>
        </button>
        <button
        className=" bg-blue-400 rounded-xl p-4 mx-4 my-4 font-bold"
        onClick={()=>setPage(4)}
        >Summary 4
        <h2 className="font-normal">(BG changer)</h2>
        </button>
        <button
        className=" bg-orange-800 rounded-xl p-4 mx-4 my-4 font-bold"
        onClick={()=>setPage(5)}
        >Summary 5
        <h2 className="font-normal">(Pass. gen.)</h2>
        </button>
        <button
        className=" bg-blue-600 rounded-xl p-4 mx-4 my-4 font-bold"
        onClick={()=>setPage(6)}
        >Summary 6
        <h2 className="font-normal">(Currency exch.)</h2>
        </button>
        <button
        className=" bg-yellow-300 rounded-xl p-4 mx-4 my-4 font-bold"
        onClick={()=>setPage(7)}
        >Summary 7
        <h2 className="font-normal">(React Router)</h2>
        </button>
        <button
        className=" bg-violet-500 rounded-xl p-4 mx-4 my-4 font-bold"
        onClick={()=>setPage(8)}
        >Summary 8
        <h2 className="font-normal">(Context API)</h2>
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
        {page==8 && <Summary08 />}
      </div>
      </div>
    </>
  )
}

export default App
