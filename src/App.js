import './App.css'
import NavBar from './components/NavBar'

import Home from './pages'

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>
      <main>
        <Home />
      </main>
    </div>
  )
}

export default App
