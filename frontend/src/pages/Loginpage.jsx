import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "../components/Navbar";
import useAuth from "../store/useAuth"; // adjust path if needed
import loginIllustration from "../assets/login-illustration.svg"; // add your illustration here
import { Toaster } from "react-hot-toast"; // ✅ Import the toaster

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
            <Navbar />
            {/* Main content area */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
                <div className="max-w-4xl w-full mx-auto">
                    {/* Main profile card with updated colors */}
                    <div className="bg-[#1f232b] backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#2a2f37]">

                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
                            <p className="mt-2 text-gray-400 text-sm">Manage your profile information</p>
                        </div>

                        {/* Two-column layout grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
                            
                            {/* LEFT COLUMN: Avatar */}
                            <div className="md:col-span-1 flex flex-col items-center gap-4 text-center md:sticky md:top-24">
                                <div className="relative group">
                                    <img
                                        src={
                                            selectedImg ||
                                            `https://ui-avatars.com/api/?name=${fullName || 'User'}&background=random&color=fff`
                                        }
                                        alt="Profile"
                                        className="w-40 h-40 rounded-full object-cover border-4 border-[#3b4149] shadow-lg transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <label
                                        htmlFor="avatar-upload"
                                        className={`absolute bottom-1 right-1 bg-orange-500 p-3 rounded-full cursor-pointer shadow-lg hover:bg-orange-600 hover:scale-110 transition-all duration-200 flex items-center justify-center ${
                                            isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
                                        }`}
                                    >
                                        <Camera className="w-5 h-5 text-white" />
                                        <input
                                            type="file"
                                            id="avatar-upload"
                                            className="hidden"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            disabled={isUpdatingProfile}
                                        />
                                    </label>
                                </div>
                                <p className="text-sm text-gray-400">
                                    {isUpdatingProfile
                                        ? "Uploading..."
                                        : "Click the camera icon to update your photo"}
                                </p>
                            </div>

                            {/* RIGHT COLUMN: Details */}
                            <div className="md:col-span-2 space-y-8">
                                {/* Editable Info Form */}
                                <div className="space-y-6">
                                    {/* Full Name Input */}
                                    <div className="space-y-2">
                                        <label htmlFor="fullName" className="text-sm font-medium text-gray-400 flex items-center gap-2">
                                            <User className="w-4 h-4" />
                                            Full Name
                                        </label>
                                        <input
                                            id="fullName"
                                            type="text"
                                            className="w-full px-4 py-3 bg-[#2b3138] rounded-lg border border-[#3b4149] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white transition-colors duration-200 placeholder:text-gray-500"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            placeholder="Your Name"
                                        />
                                    </div>

                                    {/* Email Input */}
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-400 flex items-center gap-2">
                                            <Mail className="w-4 h-4" />
                                            Email Address
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="w-full px-4 py-3 bg-[#2b3138] rounded-lg border border-[#3b4149] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white transition-colors duration-200 placeholder:text-gray-500"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    {/* Save Button */}
                                    <button
                                        onClick={handleProfileUpdate}
                                        className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-orange-500 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2.5 transition-all duration-300 transform hover:scale-[1.02] active:scale-100 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-orange-500/20"
                                        disabled={isUpdatingProfile}
                                    >
                                        {isUpdatingProfile && <Loader size={18} className="animate-spin" />}
                                        {isUpdatingProfile ? "Updating..." : "Save Changes"}
                                    </button>
                                </div>

                                {/* Account Info Section */}
                                <div className="bg-black/20 rounded-xl p-6 border border-[#2a2f37] shadow-inner">
                                    <h2 className="text-lg font-semibold mb-4 text-white">Account Information</h2>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-center justify-between py-2 border-b border-[#2a2f37]">
                                            <span className="text-gray-400">Member Since</span>
                                            <span className="font-mono text-gray-300">{authuser?.createdAt?.split("T")[0]}</span>
                                        </div>
                                        <div className="flex items-center justify-between py-2">
                                            <span className="text-gray-400">Account Status</span>
                                            <span className="text-green-400 font-semibold inline-flex items-center gap-1.5">
                                                <span className="h-2 w-2 rounded-full bg-green-400"></span>
                                                Active
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loginpage;
