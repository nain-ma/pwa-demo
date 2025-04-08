import { Routes, Route, } from 'react-router-dom'
import ShortDrama from './pages/ShortDrama'
import Play from './pages/Play'

function App() {
  return (
    <div className="w-[100vw] h-[100vh]">
      <Routes >
        <Route path="/" element={<ShortDrama />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </div>
  )
}

export default App
