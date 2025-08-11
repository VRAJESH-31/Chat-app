import React from 'react'
import { Send, Settings, UserCircle, LogOut } from 'lucide-react'
import useAuth from "../store/useAuth.js";

const Navbar = ({ showIcons = true }) => {
  const { logout, authuser } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* App Name */}
        <div className="flex items-center space-x-2">
          <Send className="text-cyan-400 h-8 w-8" />
          <h1 className="text-2xl font-bold tracking-tighter text-white">ChatApp</h1>
        </div>

        {/* Conditional Nav Icons */}
        {showIcons && (
          <nav className="flex items-center space-x-5">
            <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-300" aria-label="Settings">
              <Settings size={24} />
            </button>
            <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-300" aria-label="Profile">
              <UserCircle size={24} />
            </button>
            <button
              onClick={logout}
              className="text-gray-300 hover:text-red-500 transition-colors duration-300"
              aria-label="Logout"
            >
              <LogOut size={24} />
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar;
