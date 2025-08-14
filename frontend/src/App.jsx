import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from './pages/Homepage';
import Signup from './pages/Signup';
import Loginpage from './pages/Loginpage';
import Settingspage from './pages/Settingspage';
import Profilepage from './pages/Profilepage';
import Landing from './pages/Landing';
import useAuth from "./store/useAuth";
import { Loader } from 'lucide-react';
import { Toaster } from 'react-hot-toast'; // ✅ Import Toaster

const App = () => {
  const { authuser, checkAuth, isCheckingAuth } = useAuth();

  React.useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authuser) return (
    <div className="flex items-center justify-center h-screen">
      <Loader className="size-10 animate-spin" />
    </div>
  );

  return (
    <div>
      {/* ✅ Global toast container */}
      <Toaster position="top-center" reverseOrder={false}
      toastOptions={{
    // Default options for all toasts
    style: {
      background: '#1f232b',
      color: '#fff',
      border: '1px solid #2a2f37',
      padding: '12px 16px',
      borderRadius: '10px',
      fontSize: '14px'
    },
    success: {
      iconTheme: {
        primary: '#f97316', // orange
        secondary: '#1f232b',
      },
      style: {
        background: 'linear-gradient(90deg, #f97316, #ef4444)', // orange → red
        color: '#fff',
      },
    },
    error: {
      iconTheme: {
        primary: '#ef4444', // red
        secondary: '#1f232b',
      },
      style: {
        background: 'linear-gradient(90deg, #ef4444, #b91c1c)', // red → dark red
        color: '#fff',
      },
    },
  }}
/>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={authuser ? <Homepage /> : <Navigate to="/login" />} />
        <Route path="/login" element={!authuser ? <Loginpage /> : <Navigate to="/home" />} />
        <Route path="/signup" element={!authuser ? <Signup /> : <Navigate to="/home" />} />
        <Route path="/settings" element={<Settingspage />} />
        <Route path="/profile" element={authuser ? <Profilepage /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;
