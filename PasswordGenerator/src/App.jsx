import { useState, useCallback, useEffect, useRef } from "react";
import './App.css'
function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)
  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (char) str += "!@#$%&*_-+`~";

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, number, char, setPassword]);

  const copy = useCallback(() => {
    passwordRef.current?.select();
    //passwordRef.current?.setSelectionRange(0, 8);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {passwordGen()}, [length, number, char,passwordGen])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-4 bg-slate-500">
        <p className="text-xl text-center mb-4">Password Generator</p>
        <div className="flex shadow rounde-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="rounded outline-none w-full py-1 px-3 bg-white text-slate-600"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copy}
          className="outline-none bg-blue-700 rounded text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
  
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {setLength(e.target.value)}} />

            <label>length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={number}
            id="numberInput"
            onChange={() => {
              setNumber((prev) => !prev);
            }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={char}
            id="charrInput"
            onChange={() => {
              setChar((prev) => !prev);
            }} />
            <label htmlFor="charInput">Characters</label>
          </div>

        </div>

      </div>
    </>
  );
}

export default App;
