import React from 'react'
import { Routes, Route } from "react-router-dom";
import Landing from '../src/pages/Landing';
import Login from './auth/Login';
import Homepage from './pages/Homepage';
import Signup from './auth/Signup';


const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Homepage" element={<Homepage />} />
      </Routes>
    </div>
  )
}

export default App
