import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black");
  //console.log(color);
  

  return (
    <>
     <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 p-3 bg-slate-200 rounded-3xl gap-7 shadow-lg inset-x-24">

      <button className="rounded-3xl text-white py-2 px-4 shadow-lg" style={{backgroundColor:"red"}} onClick={() => setColor("red")}>Red</button>
      <button className="rounded-3xl text-slate-500 py-1 px-4 shadow-lg" style={{backgroundColor:"yellow"}} onClick={() => setColor("Yellow")}>Yellow</button>
      <button className="rounded-3xl text-white py-1 px-4 shadow-lg" style={{backgroundColor:"green"}} onClick={() => setColor("Green")}>Green</button>
      <button className="rounded-3xl text-white py-1 px-4 shadow-lg" style={{backgroundColor:"blue"}} onClick={() => setColor("Blue")}>Blue</button>
      <button className="rounded-3xl text-slate-700 py-1 px-4 shadow-lg" style={{backgroundColor:"pink"}} onClick={() => setColor("Pink")}>Pink</button>
      <button className="rounded-3xl text-white py-1 px-4 shadow-lg" style={{backgroundColor:"darkblue"}} onClick={() => setColor("Darkblue")}>Darkblue</button>
      <button className="rounded-3xl text-white py-1 px-4 shadow-lg" style={{backgroundColor:"orange"}} onClick={() => setColor("Orange")}>Orange</button>
      <button className="rounded-3xl text-white py-1 px-4 shadow-lg" style={{backgroundColor:"purple"}} onClick={() => setColor("Purple")}>Purple</button>
      <button className="rounded-3xl text-white py-1 px-4 shadow-lg" style={{backgroundColor:"olive"}} onClick={() => setColor("Olive")}>Olive</button>
      <button className="rounded-3xl text-white py-1 px-4 shadow-lg" style={{backgroundColor:"magenta"}} onClick={() => setColor("Magenta")}>
        Magenta
      </button>

      </div>
     </div>
    </>
  )
}

export default App
