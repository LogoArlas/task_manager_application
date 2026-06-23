import './App.css'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <>
        <div className="App">
          Welcome to the App.
          <Register />
          <Login />
          <Navbar />
        </div>
    </>
  )
}

export default App
