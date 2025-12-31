import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import PitchDeck from './views/PitchDeck'
import WebDesign from './views/WebDesign'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pitch-deck" element={<PitchDeck />} />
      <Route path="/web-design" element={<WebDesign />} />
    </Routes>
  )
}

export default App
