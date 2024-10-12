import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoard from './App';
import NextPage from './components/Modal';
const App1 = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/next-page" element={<NextPage />} /> 
      </Routes>
    </Router>
  )
}

export default App1