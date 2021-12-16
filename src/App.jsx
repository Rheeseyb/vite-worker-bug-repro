import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import GoodWorker1 from './workers/good-worker-1?worker'
import GoodWorker2 from './workers/good-worker-2?worker'
import BadWorker from './workers/bad-worker?worker'

const badWorker = new BadWorker() // Commenting this line will stop the error
const goodWorker1 = new GoodWorker1()
const goodWorker2 = new GoodWorker2()

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
