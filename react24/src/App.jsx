import { useEffect, useState } from 'react'

import './App.css'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=> {
    console.log(`Effect used at ${now}`)
  })

  function update() {
    let ct = count;
    ct += 1
    setCount(ct)
  }

  return (
    <>
      <About/>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App