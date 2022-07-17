import React from 'react'
import './App.css'
import HomePage from './views/HomePage'
import ResultsPage from './views/ResultsPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
