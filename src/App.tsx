import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Fastily from './pages/Fastily'
import Exercly from './pages/Exercly'
import Foodilicous from './pages/Foodilicous'
import Verbb from './pages/Verbb'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fastily" element={<Fastily />} />
        <Route path="/exercly" element={<Exercly />} />
        <Route path="/foodilicous" element={<Foodilicous />} />
        <Route path="/verbb" element={<Verbb />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App