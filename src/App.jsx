
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
      // console.log(`position x: ${position.x}, y: ${position.y}`)
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }

  }, [enabled])

  return (
    <main>
      <div
        className='mouse-follower'
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }} >

      </div>
      <h2>Mouse Follower</h2>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Disable' : 'Enable'}
      </button>
    </main>
  )
}

export default App
