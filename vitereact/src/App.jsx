import { useState } from 'react'
import Chai from './chai'
function App() {
  const [count, setCount] = useState(2)

  function handleClick() {
    setCount(count + 1)
  }

  return (                     // only one element can be returned, so make a parent div and enclose all tags inside it
    <>                          {/*  called fragments */}
      <h1>Hello how r u</h1>
      <h2>Count = {count}</h2>
      <button onClick={handleClick}>Click</button>
      <Chai/>     
    </>
  )
}

export default App
