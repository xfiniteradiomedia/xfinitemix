import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import LibraryPage from './pages/LibraryPage'
import PlayerBar from './components/PlayerBar'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<LibraryPage />} />
      </Routes>
      <PlayerBar />
    </div>
  )
}

export default App