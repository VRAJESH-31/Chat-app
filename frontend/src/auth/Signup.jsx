import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Attempting to sign up...");
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-[#0d0f12] via-[#13161c] to-[#1c1f26] font-sans text-white">
      {/* Navbar without icons */}
      <Navbar showIcons={false} />

      {/* Main Signup Card */}
      <main className="flex flex-1 justify-center items-center px-4 py-10">
        <div className="bg-[#1f232b] border border-[#2a2f37] rounded-2xl shadow-xl p-10 w-full max-w-md transition-all duration-300">
          <h2 className="text-center text-3xl font-bold text-white mb-6 tracking-wide">Create an Account</h2>
          
          <form className="space-y-5" onSubmit={handleSignUp}>
            <input
              type="text"
              placeholder="Username"
              className="w-full rounded-lg bg-[#2b3138] border border-[#3b4149] px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg bg-[#2b3138] border border-[#3b4149] px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-lg bg-[#2b3138] border border-[#3b4149] px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full rounded-lg bg-[#2b3138] border border-[#3b4149] px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition"
              required
            />
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-4 py-3 font-bold text-white shadow-lg shadow-cyan-500/30 transition-transform transform hover:scale-[1.02]"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-6">
            Already have an account?{" "}
            <button
              onClick={() => navigate('/login')}
              className="text-cyan-400 hover:underline font-medium"
            >
              LOGIN
            </button>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Signup;
