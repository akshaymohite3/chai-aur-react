import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowd, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

//useRef hook
   const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstuvwxyz"

    if (numberAllowd) str += "0123456789"
    if (characterAllowed) str += "!@#$%^&*-+=[]{}~`"

    for (let i = 1; i<= length; i++){
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)   
    }

    setPassword(pass)

  }, [length, numberAllowd, characterAllowed, setPassword]) 

   const copPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password)
   }, [password])

 useEffect(() => {
  passwordGenerator()
 }, [length, numberAllowd, characterAllowed, passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow roundedlg overflow-hidden mb-1'>
        <input 
        type="text"
        value={password}
        className='ountline-none w-full py-1 my-2 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={copPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1 my-4'>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
              defaultChecked={numberAllowd}
              id="numberInput"
              onChange={() => {
              setNumberAllowed((prev) => 
              !prev);
          }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange={() => {
              setNumberAllowed((prev) => 
              !prev);
          }}
          />
          <label htmlFor='numberInput'>Character</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
