import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  const increase = () => {
    if(counter < 20) {
      counter = counter + 1;
      setCounter(counter);
    }
  }

  const decrease = () => {
    if(counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    }
  }

  return (
    <>
    <p>Maximum value : 20 | Minimum value : 0</p>
    <h1>Count : {counter}</h1>
    <button type="button" onClick={decrease}>-</button>
    <button type="button" onClick={increase}>+</button>
    </>
  )
}

export default App
