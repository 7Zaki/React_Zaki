import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const [counter, setCounter] = useState(15)

  //let counter = 15

  const addValue = () => {
    if (counter !== 20) {
      setCounter(counter + 1)
    }
  }

  const decreaseValue = () => {
    if (counter !== 0)
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Increase value {counter}</button>
      <br/>
      <button onClick={decreaseValue}>Decrease value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
