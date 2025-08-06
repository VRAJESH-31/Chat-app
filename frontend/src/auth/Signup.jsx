import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaComments as CommentsIcon } from 'react-icons/fa';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // In a real app, you would handle user registration here.
    console.log("Attempting to sign up...");
    // For this example, we'll just log a message.
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-[#0f1114] to-[#1a1e23] font-sans text-white">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-gray-700 px-6 py-4 shadow-md backdrop-blur-md">
        <div className="flex items-center gap-3">
          <CommentsIcon />
          <h1 className="text-xl font-bold tracking-tight">ChatApp</h1>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
          <a href="#" className="hover:text-blue-400 transition-colors">Product</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Download</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Pricing</a>
          <button onClick={() => navigate('/login')} className="rounded-full bg-blue-600 hover:bg-blue-700 px-5 py-2 transition">
            Login
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 justify-center items-center px-4 py-10">
        <div className="bg-[#1a1e23] border border-gray-700/60 rounded-xl shadow-lg p-8 w-full max-w-md">
          <h2 className="text-center text-3xl font-bold text-white mb-6">Create an Account</h2>
          <form className="space-y-4" onSubmit={handleSignUp}>
            <input
              type="text"
              placeholder="Username"
              className="w-full rounded-lg bg-[#2b3138] border border-gray-600 px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg bg-[#2b3138] border border-gray-600 px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-lg bg-[#2b3138] border border-gray-600 px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition"
              required
            />
              <input
              type="password"
              placeholder="Confirm Password"
              className="w-full rounded-lg bg-[#2b3138] border border-gray-600 px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition"
              required
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 px-4 py-3 font-bold text-white transition"
            >
              Create Account
            </button>
          </form>
          <p className="text-center text-sm text-gray-400 mt-6">
            Already have an account?{" "}
            <button onClick={() => navigate('/login')} className="text-blue-400 hover:underline font-medium">LOGIN</button>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Signup;
