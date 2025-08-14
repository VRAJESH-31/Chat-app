import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from './pages/Homepage';
import Signup from './pages/Signup';
import Loginpage from './pages/Loginpage';
import Settingspage from './pages/Settingspage';
import Profilepage from './pages/Profilepage';
import Landing from './pages/Landing'; // <-- import Landing
import useAuth from "./store/useAuth";
import { Loader } from 'lucide-react';



const App = () => {
  const {authuser, checkAuth, isCheckingAuth} = useAuth();
  React.useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authuser) return (
    <div className="flex items-center justify-center h-screen">
      <Loader className="size-10 animate-spin"/>
    </div>
  );

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} /> {/* Landing page always at root */}
        <Route path="/home" element={authuser ? <Homepage /> : <Navigate to="/login"/>} />
        <Route path="/login" element={!authuser ? <Loginpage />: <Navigate to="/home" /> } />
        <Route path="/signup" element={!authuser ? <Signup /> : <Navigate to="/home" /> } />
        <Route path="/settings" element={<Settingspage />} />
        <Route path="/profile" element={authuser ? <Profilepage /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App
