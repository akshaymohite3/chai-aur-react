import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj= {
    username: "akshay",
    age: 21,
    degree: "Msc"
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-5 mb-4 rounded-xl'>Tailwind test</h1>
      <Card username="Akshay" btnText="Click Me" />
      <Card username="Hitesh" btnText="Visit Me" />
    </>
  )
}

export default App
