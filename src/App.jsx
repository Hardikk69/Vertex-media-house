import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import PitchDeck from './views/PitchDeck'
import WebDesign from './views/WebDesign'
import Automation from './views/Automation'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pitch-deck" element={<PitchDeck />} />
      <Route path="/web-design" element={<WebDesign />} />
      <Route path="/automation" element={<Automation />} />
    </Routes>
  )
}

export default App
