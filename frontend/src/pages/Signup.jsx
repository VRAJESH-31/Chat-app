import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import useAuth from '../store/useAuth';
import { toast } from 'react-hot-toast';
import signupIllustration from '../assets/signupsv.svg'; // <-- import your SVG

function Signup() {
  const navigate = useNavigate();
  const { signup, isSignedUp } = useAuth();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      signup({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password
      });
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-[#0d0f12] via-[#13161c] to-[#1c1f26] font-sans text-white">
      <Navbar showIcons={false} />

      <main className="flex flex-1 items-center justify-center px-4 py-10">
        <div className="flex w-full max-w-6xl bg-[#1f232b] border border-[#2a2f37] rounded-2xl shadow-xl overflow-hidden">
          
          {/* Left Side - Form */}
          <div className="flex flex-col justify-center p-10 w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-6 tracking-wide">
              Create an Account
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full rounded-lg bg-[#2b3138] border border-[#3b4149] px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg bg-[#2b3138] border border-[#3b4149] px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-lg bg-[#2b3138] border border-[#3b4149] px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition"
              />

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-4 py-3 font-bold text-white shadow-lg shadow-cyan-500/30 transition-transform transform hover:scale-[1.02]"
              >
                Create Account
              </button>
            </form>

            <p className="text-sm text-gray-400 mt-6">
              Already have an account?{' '}
              <button
                onClick={() => navigate('/login')}
                className="text-cyan-400 hover:underline font-medium"
              >
                LOGIN
              </button>
            </p>
          </div>

          {/* Right Side - SVG Illustration + Welcome */}
          <div className="hidden md:flex flex-col items-center justify-center w-1/2 bg-gradient-to-br from-[#13161c] to-[#1c1f26] p-8">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              Welcome to Our ChatApp!
            </h3>
            <p className="text-gray-400 text-center mb-6">
              Join us today and start exploring amazing features.
            </p>
            <img
              src={signupIllustration}
              alt="Signup illustration"
              className="w-72 h-72 object-contain"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Signup;
