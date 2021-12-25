import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Main from './components/Main.js'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  )
}

export default App
