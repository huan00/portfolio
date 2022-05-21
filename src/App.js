import './App.css'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages'
import Resume from './pages/Resume'

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
