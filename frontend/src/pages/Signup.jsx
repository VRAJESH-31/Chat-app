import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import useAuth from "../store/useAuth";
import { toast } from "react-hot-toast";
import signupIllustration from "../assets/signupsv.svg";

function Signup() {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!formData.fullName.trim())
      return toast.error("Full name is required");
    if (!formData.email.trim())
      return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email format");
    if (!formData.password)
      return toast.error("Password is required");
    if (formData.password.length < 6)
      return toast.error("Password must be at least 6 characters");
    if (formData.password !== formData.confirmPassword)
      return toast.error("Passwords do not match");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      signup({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0d0f12] via-[#13161c] to-[#1c1f26] text-white">
      <Navbar showIcons={false} />

      <main className="flex flex-1 items-center justify-center px-4 py-10">
        <div className="flex w-full max-w-6xl bg-[#1f232b] border border-[#2a2f37] rounded-2xl shadow-lg overflow-hidden">
          
          {/* Left Side - Form */}
          <div className="flex flex-col justify-center p-10 w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 tracking-wide">
              Create an Account
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full rounded-lg bg-[#2b3138] border border-[#3b4149] px-4 py-3 text-white placeholder-gray-400 focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] outline-none transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg bg-[#2b3138] border border-[#3b4149] px-4 py-3 text-white placeholder-gray-400 focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] outline-none transition"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-lg bg-[#2b3138] border border-[#3b4149] px-4 py-3 text-white placeholder-gray-400 focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] outline-none transition"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full rounded-lg bg-[#2b3138] border border-[#3b4149] px-4 py-3 text-white placeholder-gray-400 focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] outline-none transition"
              />

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-[#FF7A45] hover:to-[#FFB065] px-4 py-3 font-semibold text-white shadow-lg shadow-[#FF6B35]/30 transform transition-transform hover:scale-[1.02]"
              >
                Create Account
              </button>
            </form>

            <p className="text-sm text-gray-400 mt-6">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-[#FFA255] hover:underline font-medium"
              >
                LOGIN
              </button>
            </p>
          </div>

          {/* Right Side - Illustration */}
          <div className="hidden md:flex flex-col items-center justify-center w-1/2 bg-gradient-to-br from-[#13161c] to-[#1c1f26] p-8">
            <h3 className="text-2xl font-semibold mb-4 text-[#FFA255]">
              Welcome to ChatSphere!
            </h3>
            <p className="text-gray-400 text-center mb-6 max-w-xs">
              Join us today and start exploring amazing features.
            </p>
            <img
              src={signupIllustration}
              alt="Signup illustration"
              className="w-full max-w-xs md:max-w-sm lg:max-w-md object-contain"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Signup;