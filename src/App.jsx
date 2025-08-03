import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About' // ✅ Add this line

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} /> {/* ✅ Add this route */}
    </Routes>
    </BrowserRouter>
  )
}

export default App
