import { useState } from 'react'
import './App.css'
import Home from './componentes/Home'

function App() {
  const [count, setCount] = useState()

  return (
    <>
      <Home />
    </>
  )
}

export default App
