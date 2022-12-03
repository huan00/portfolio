import './styles.css'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages'
import Resume from './pages/Resume'
import Main from './pages/Main'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  )
}

export default App
