import React from 'react'
import { Routes, Route } from "react-router-dom";
import Landing from '../src/pages/Landing';
import Login from './auth/Login';
import Homepage from './pages/Homepage';


const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Homepage" element={<Homepage />} />
      </Routes>
    </div>
  )
}

export default App
