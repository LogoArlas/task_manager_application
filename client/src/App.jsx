import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Register from './components/pages/Register.jsx'
import Login from './components/pages/Login.jsx'
import Navbar from './components/Navbar.jsx'
import Event from './components/pages/Event.jsx'
import Task from './components/pages/Task.jsx'

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />} >
              <Route index element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="event" element={<Event />} />
              <Route path="register" element={<Task />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
