import React from "react";
import { useNavigate } from "react-router-dom";
import { FaComments, FaUserFriends, FaLock, FaClock } from "react-icons/fa";

const Landing = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate("/login");
    };

    return (
        <div
            className="relative flex min-h-screen flex-col bg-gradient-to-br from-[#0d0f12] via-[#13161c] to-[#1c1f26] overflow-x-hidden text-white"
            style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
        >
            {/* Navbar */}
            <header className="flex items-center justify-between border-b border-[#243647] px-8 md:px-16 py-5">
                <div className="flex items-center gap-3">
                    <FaComments className="w-7 h-7 text-cyan-400" />
                    <h2 className="text-xl font-extrabold tracking-wide">ChatterBox</h2>
                </div>
                <nav className="flex items-center gap-6">
                    <a href="#" className="text-sm font-medium hover:text-cyan-400 transition">Features</a>
                    <a href="#" className="text-sm font-medium hover:text-cyan-400 transition">Pricing</a>
                    <a href="#" className="text-sm font-medium hover:text-cyan-400 transition">Support</a>
                    <button
                        onClick={handleStart}
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-5 py-2 rounded-lg text-white font-bold text-sm shadow-lg shadow-cyan-500/20 transition-transform transform hover:scale-105"
                    >
                        Get Started
                    </button>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center text-center px-4 md:px-20 py-20 md:py-28">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
                        Chat Smarter. Connect Faster.
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-300">
                        ChatterBox lets you enjoy fast, private, and seamless conversations — anytime, anywhere.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <button
                            onClick={handleStart}
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
                        >
                            Start Chatting
                        </button>
                        <button
                            className="px-6 py-3 border border-gray-500 text-gray-300 hover:border-blue-500 hover:text-blue-400 rounded-lg transition duration-300"
                        >
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Decorative Background Blobs */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay blur-3xl opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-overlay blur-3xl opacity-20 animate-pulse"></div>
                </div>
            </section>

            {/* Features Section */}
            <section className="px-6 md:px-32 py-16 border-t border-[#243647]">
                <div className="max-w-5xl mx-auto space-y-10">
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl md:text-4xl font-bold">Why Choose ChatterBox?</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Our platform is designed with your needs in mind, offering a seamless and secure communication experience.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {/* Feature 1 */}
                        <div className="rounded-xl border border-[#344d65] bg-[#1a2632] p-6 text-center hover:border-cyan-500 transition">
                            <FaUserFriends className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                            <h3 className="font-semibold text-lg">Connect with Anyone</h3>
                            <p className="text-sm text-gray-400 mt-1">
                                Find and connect with friends, family, and colleagues from around the globe.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="rounded-xl border border-[#344d65] bg-[#1a2632] p-6 text-center hover:border-cyan-500 transition">
                            <FaLock className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                            <h3 className="font-semibold text-lg">Secure and Private</h3>
                            <p className="text-sm text-gray-400 mt-1">
                                Your conversations are protected with end-to-end encryption.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="rounded-xl border border-[#344d65] bg-[#1a2632] p-6 text-center hover:border-cyan-500 transition">
                            <FaClock className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                            <h3 className="font-semibold text-lg">Always Available</h3>
                            <p className="text-sm text-gray-400 mt-1">
                                Stay connected anytime, anywhere with our reliable platform.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center py-10 text-sm text-gray-500 border-t border-[#243647]">
                <div className="flex flex-wrap justify-center gap-8 mb-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms of Service</a>
                    <a href="#" className="hover:underline">Contact Us</a>
                </div>
                <p>© 2025 ChatterBox. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Landing;
