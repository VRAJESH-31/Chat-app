import React from "react";
import { useNavigate } from "react-router-dom";
import { FaComments, FaUserFriends, FaLock, FaClock } from "react-icons/fa";
import bg from "../assets/bg.jpg";

const Landing = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate("/login");
    };

    return (
        <div
            className="relative flex min-h-screen flex-col bg-[#111a22] overflow-x-hidden"
            style={{
                fontFamily: '"Space Grotesk", "Noto Sans", sans-serif',
            }}
        >
            {/* ================== Navbar ================== */}
            <header className="flex items-center justify-between border-b border-[#243647] px-10 py-4 text-white">
                <div className="flex items-center gap-3">
                    <FaComments className="w-6 h-6 text-blue-500" />
                    <h2 className="text-lg font-bold">ChatterBox</h2>
                </div>
                <nav className="flex items-center gap-8">
                    <a href="#" className="text-sm font-medium hover:text-blue-400 transition">
                        Features
                    </a>
                    <a href="#" className="text-sm font-medium hover:text-blue-400 transition">
                        Pricing
                    </a>
                    <a href="#" className="text-sm font-medium hover:text-blue-400 transition">
                        Support
                    </a>
                    <button
                        onClick={handleStart}
                        className="bg-[#197fe5] hover:bg-[#166cc1] px-4 py-2 rounded-lg font-bold text-sm transition"
                    >
                        Get Started
                    </button>
                </nav>
            </header>

            {/* ================== Hero ================== */}
            <div className="px-6 md:px-40 flex flex-1 justify-center py-10">
                <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                    <div
                        className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 rounded-lg"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url(${bg})`,
                        }}
                    >
                        <div className="flex flex-col gap-2 text-center">
                            <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight leading-tight">
                                Connect Instantly, Chat Seamlessly
                            </h1>
                            <h2 className="text-white text-base font-normal max-w-lg mx-auto">
                                Experience real-time conversations with friends, family, and colleagues.
                            </h2>
                        </div>
                        <button
                            onClick={handleStart}
                            className="mt-4 h-12 px-5 rounded-lg bg-[#197fe5] hover:bg-[#166cc1] text-white font-bold text-base tracking-wide transition"
                        >
                            Start Chatting
                        </button>
                    </div>

                    {/* ================== Features ================== */}
                    <section className="flex flex-col gap-10 px-4 py-10">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-white text-3xl md:text-4xl font-bold max-w-2xl">
                                Why Choose ChatterBox?
                            </h2>
                            <p className="text-white text-base max-w-2xl">
                                Our platform is designed with your needs in mind, offering a seamless and secure communication experience.
                            </p>
                        </div>

                        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
                            {/* Feature 1 */}
                            <div className="rounded-lg border border-[#344d65] bg-[#1a2632] p-4 flex flex-col gap-2 items-center text-center">
                                <FaUserFriends className="w-6 h-6 text-white" />
                                <h3 className="text-white font-bold text-base">Connect with Anyone</h3>
                                <p className="text-[#93adc8] text-sm">
                                    Easily find and connect with friends, family, and colleagues from around the globe.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="rounded-lg border border-[#344d65] bg-[#1a2632] p-4 flex flex-col gap-2 items-center text-center">
                                <FaLock className="w-6 h-6 text-white" />
                                <h3 className="text-white font-bold text-base">Secure and Private</h3>
                                <p className="text-[#93adc8] text-sm">
                                    Your conversations are protected with end-to-end encryption.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="rounded-lg border border-[#344d65] bg-[#1a2632] p-4 flex flex-col gap-2 items-center text-center">
                                <FaClock className="w-6 h-6 text-white" />
                                <h3 className="text-white font-bold text-base">Always Available</h3>
                                <p className="text-[#93adc8] text-sm">
                                    Stay connected anytime, anywhere with our reliable and responsive platform.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* ================== Footer ================== */}
            <footer className="text-center py-10 text-[#93adc8]">
                <div className="flex flex-wrap justify-center gap-6">
                    <a href="#" className="hover:underline min-w-40">Privacy Policy</a>
                    <a href="#" className="hover:underline min-w-40">Terms of Service</a>
                    <a href="#" className="hover:underline min-w-40">Contact Us</a>
                </div>
                <p className="mt-6">© 2024 ChatterBox. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Landing;
