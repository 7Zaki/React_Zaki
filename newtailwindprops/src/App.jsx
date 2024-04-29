import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

let myObj = {
  name:"Zaki",
  age:15
}

let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-200 text-black p-8 rounded-xl mb-4'>Tailwind CSS || Zaki</h1>
      <Card username="coffeecode" someObj={newArr} desigTxt="Senior Software Engineer"/>
      <Card username="nocode" desigTxt="Senior Designer"/>
    </>
  )
}

export default App
