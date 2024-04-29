import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  //let counter = 15

  const addValue = () => {
      counter = counter + 1
      setCounter(Math.min(20, counter));
       //this is also one of the method ot update setCounter
    //setCounter(counter + 1)  //this method bypasses the limitations of const
    //console.log("value added", counter);
  
    
  }
  
  const removeValue = () => {
    counter = counter - 1 //Problem wwith this method is this will bring the maximum value from addValue function
    setCounter(Math.max(0, counter))
  }
  return (
    <>
    <div>
      <h1>Rose and Code</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}>Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </div>
    </>
  )
}

export default App
