import React from 'react';
import { Send, Settings, UserCircle, LogOut } from 'lucide-react';
import { Link } from "react-router-dom";
import useAuth from "../store/useAuth.js";

const Navbar = ({ showIcons = true }) => {
  const { logout } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="bg-orange-500 rounded-full p-2">
            <Send className="text-white h-6 w-6" />
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight text-white">
            Chatterbox
          </h1>
        </div>

        {/* Navigation / Icons */}
        {showIcons && (
          <nav className="flex items-center gap-6">
            <button
              className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors duration-300"
              aria-label="Settings"
            >
              <Settings size={22} />
              <span className="hidden sm:inline text-sm font-medium">Settings</span>
            </button>

            <Link
              to="/profile"
              className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors duration-300"
              aria-label="Profile"
            >
              <UserCircle size={22} />
              <span className="hidden sm:inline text-sm font-medium">Profile</span>
            </Link>

            <button
              onClick={logout}
              className="flex items-center gap-2 text-gray-300 hover:text-red-500 transition-colors duration-300"
              aria-label="Logout"
            >
              <LogOut size={22} />
              <span className="hidden sm:inline text-sm font-medium">Logout</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
