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
import { Toaster } from 'react-hot-toast'; 

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
        background: '#111827', // Aligned with Tailwind's gray-900 for consistency
        color: '#fff',
        border: '1px solid #374151', // Tailwind's gray-700
        padding: '16px',
        borderRadius: '10px',
        fontSize: '15px',
        boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.25)', // Adds depth
    },
    // Specific options for different toast types
    success: {
        duration: 3000,
        iconTheme: {
            primary: '#fff', // White icon for better contrast on gradient
            secondary: '#10B981', // A vibrant green
        },
        style: {
            background: 'linear-gradient(to right, #10B981, #34D399)', // Green gradient
            border: '1px solid #10B981',
            boxShadow: '0 3px 8px 0 rgba(16, 185, 129, 0.3)', // Subtle green glow
        },
    },
    error: {
        duration: 4000,
        iconTheme: {
            primary: '#fff', // White icon
            secondary: '#EF4444', // Red-500
        },
        style: {
            background: 'linear-gradient(to right, #EF4444, #F87171)', // Red gradient
            border: '1px solid #EF4444',
            boxShadow: '0 3px 8px 0 rgba(239, 68, 68, 0.3)', // Subtle red glow
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
