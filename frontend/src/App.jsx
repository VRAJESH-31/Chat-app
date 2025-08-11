import React from 'react'
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Signup from './pages/Signup';
import Loginpage from './pages/Loginpage';
import Settingspage from './pages/Settingspage';
import Profilepage from './pages/Profilepage';


const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/settings" element={<Settingspage />} />
      <Route path="/profile" element={<Profilepage />} />
      </Routes>
    </div>
  )
}

export default App
