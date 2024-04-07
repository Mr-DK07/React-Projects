import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addValue = () =>{
    if(count < 20){
      setCount((count) => count + 1)
    }
  }
  const removeValue = () =>{
    if(count > 0){
     setCount((count) => count - 1)
    }
  }
const resetValue = () => {
  setCount((count) => count = 0);
}
  return (
    <>
      <h1>Counter</h1>
      <div className="card">
        <p>count is {count}</p>
        <button onClick={addValue}>
          ADD
        </button>
        <button onClick={removeValue}>
          Remove
        </button><br />
        <button onClick={resetValue}>Reset</button>
      </div>
    </>
  )
}

export default App
