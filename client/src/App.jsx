import './App.css'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
      <div className="App">
        <p>Welcome to User Interface Programming</p>
        <Navbar />
        <Register />
        <Login />
      </div>
  )
}

export default App
