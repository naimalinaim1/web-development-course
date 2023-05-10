import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  return (
    <div className="App">
      <h1>Bite + Miact</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + count)}>
          count is {count}
        </button>
        <button>Wrong !!!!!!!!!!!!!!!!!!!!!!</button>
      </div>
    </div>
  )
}

export default App
