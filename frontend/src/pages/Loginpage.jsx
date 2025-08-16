import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "../components/Navbar";
import useAuth from "../store/useAuth"; 
import loginIllustration from "../assets/login-illustration.svg";
import { Toaster } from "react-hot-toast";

const Loginpage = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { login, isLoggingIn } = useAuth();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(formData);
    };

    return (
        <div className="h-screen w-screen bg-gradient-to-br from-[#0d0f12] via-[#13161c] to-[#1c1f26] text-white overflow-hidden flex flex-col">
            <Navbar showIcons={false} />


            <main className="flex flex-1 justify-center items-center px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
                    
                    {/* Illustration Section */}
                    <div className="hidden md:flex justify-center">
                        <img
                            src={loginIllustration}
                            alt="Login Illustration"
                            className="w-48 sm:w-64 md:w-full max-w-xs md:max-w-sm lg:max-w-md object-contain"
                        />
                    </div>

                    {/* Form Section */}
                    <div className="bg-[#1f232b] border border-[#2a2f37] rounded-2xl shadow-xl p-8 md:p-10 w-full max-w-md">
                        <h2 className="text-center text-3xl font-bold text-white mb-2">
                            Welcome Back
                        </h2>
                        <p className="text-center text-gray-400 mb-8">
                            Login to your account to continue
                        </p>

                        <form className="space-y-5" onSubmit={handleSubmit}>
                            {/* Email */}
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email or Username"
                                className="w-full rounded-lg bg-[#2b3138] border border-[#3b4149] px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition"
                            />

                            {/* Password */}
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    className="w-full rounded-lg bg-[#2b3138] border border-[#3b4149] px-4 py-3 pr-12 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-orange-400"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={isLoggingIn}
                                className="w-full rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-orange-500 px-4 py-3 font-bold text-white shadow-lg shadow-orange-500/30 transition-transform transform hover:scale-[1.02]"
                            >
                                {isLoggingIn ? "Logging in..." : "LOGIN"}
                            </button>
                        </form>

                        {/* Signup link */}
                        <p className="text-center text-sm text-gray-400 mt-6">
                            Don&apos;t have an account?{" "}
                            <button
                                type="button"
                                onClick={() => navigate("/signup")}
                                className="text-orange-400 hover:underline font-medium"
                            >
                                Sign up
                            </button>
                        </p>
                    </div>
                </div>
            </main>
            <Toaster />
        </div>
    );
};

export default Loginpage;
