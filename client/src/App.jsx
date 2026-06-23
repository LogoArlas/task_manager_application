import { useState } from 'react'
import './App.css'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="App">
          Welcome to the App.
        </div>
      </section>
    </>
  )
}

export default App
