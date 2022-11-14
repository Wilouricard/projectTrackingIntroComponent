import { useState } from 'react'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <Hero />
    </div>
  )
}

export default App
