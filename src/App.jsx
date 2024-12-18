import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SpeedInsights />
      
    </>
  )
}

export default App
