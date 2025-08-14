import React from "react";
import { useNavigate } from "react-router-dom";
import { FaComments, FaUserFriends, FaLock, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import lbg1 from "../assets/lbg1.svg";
import lbg2 from "../assets/lbg2.svg";

const Landing = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate("/login");
    };

    return (
        <div
            className="relative flex min-h-screen flex-col overflow-x-hidden text-white antialiased"
            style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
        >
            {/* Global Styles */}
            <style>
                {`
                body {
                    background-color: #0d1117;
                    color: #e5e7eb;
                    overflow-x: hidden;
                }
                .bg-grid-pattern {
                    background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0);
                    background-size: 25px 25px;
                }
                .bg-gradient-mesh {
                    background-image: 
                        radial-gradient(at 20% 30%, rgba(255, 107, 53, 0.15) 0px, transparent 50%),
                        radial-gradient(at 80% 70%, rgba(255, 162, 85, 0.15) 0px, transparent 50%),
                        radial-gradient(at 40% 20%, rgba(29, 78, 216, 0.15) 0px, transparent 50%),
                        radial-gradient(at 60% 80%, rgba(124, 58, 237, 0.15) 0px, transparent 50%);
                }
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
                .gradient-border {
                    position: relative;
                }
                .gradient-border::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    padding: 1px;
                    background: linear-gradient(45deg, #FF6B35, #FFA255, #3B82F6, #8B5CF6);
                    -webkit-mask: 
                        linear-gradient(#fff 0 0) content-box, 
                        linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    pointer-events: none;
                }
                `}
            </style>

            {/* Background Elements */}
            <div className="fixed inset-0 bg-grid-pattern opacity-20"></div>
            <div className="fixed inset-0 bg-gradient-mesh opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d1117] z-0"></div>

            {/* Floating Gradient Blobs */}
            <div className="fixed -left-40 -top-40 w-80 h-80 bg-gradient-to-r from-[#FF6B35]/30 to-[#FFA255]/30 rounded-full filter blur-3xl opacity-20 animate-float"></div>
            <div className="fixed -right-40 bottom-0 w-96 h-96 bg-gradient-to-r from-[#3B82F6]/20 to-[#8B5CF6]/20 rounded-full filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>

            {/* Navbar */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg border-b border-gray-800/50">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-orange-500 to-red-500 p-1 rounded-lg shadow-lg shadow-[#FF6B35]/20">
                            <FaComments className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold tracking-wider">ChatterBox</h1>
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-sm font-medium hover:text-[#FF6B35] transition">Features</a>
                        <a href="#" className="text-sm font-medium hover:text-[#FF6B35] transition">Pricing</a>
                        <a href="#" className="text-sm font-medium hover:text-[#FF6B35] transition">Support</a>
                        <button
                            onClick={handleStart}
                            className="relative overflow-hidden group bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105 transition-transform px-5 py-2 rounded-lg text-white font-bold text-sm shadow-lg shadow-[#FF6B35]/20"
                        >
                            <span className="relative z-10">Get Started</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </button>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden z-10">
                <div className="container mx-auto px-6 relative flex flex-col md:flex-row items-center">
                    {/* Left - Text */}
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">
                                Chat Smarter
                            </span>
                            <br className="hidden md:inline" /> Connect Faster
                        </h1>
                        <p
                            className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 animate-fade-in-up"
                            style={{ animationDelay: "0.2s" }}
                        >
                            Enjoy lightning-fast, private, and seamless conversations — anytime, anywhere.
                        </p>
                        <div
                            className="flex justify-center md:justify-start space-x-4 animate-fade-in-up"
                            style={{ animationDelay: "0.4s" }}
                        >
                            <button
                                onClick={handleStart}
                                className="relative overflow-hidden group bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-8 py-4 rounded-lg transform hover:scale-105 transition-transform duration-300 shadow-xl shadow-[#FF6B35]/30"
                            >
                                <span className="relative z-10">Start Chatting</span>
                                <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            </button>
                            <button className="gradient-border bg-gray-800/50 border border-transparent text-white font-semibold px-8 py-4 rounded-lg hover:scale-105 hover:bg-gray-700/70 transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Right - Local SVG Illustration */}
                    <div className="flex-1 hidden md:flex justify-center relative">
                        <img
                            src={lbg1}
                            alt="Chat Illustration"
                            className="max-w-md drop-shadow-lg relative z-10"
                        />
                        <div className="absolute -z-0 w-full h-full top-0 left-0 bg-gradient-to-r from-[#FF6B35]/20 to-[#FFA255]/20 rounded-full filter"></div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="relative py-20 bg-gradient-to-b from-[#0d1117] to-[#111827] border-t border-gray-800/50 overflow-hidden z-10">
                {/* Decorative elements */}
                <div className="absolute top-1/4 left-10 w-40 h-40 bg-[#FF6B35]/10 rounded-full filter "></div>
                <div className="absolute bottom-1/4 right-10 w-60 h-60 bg-[#3B82F6]/10 rounded-full filter "></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B35] to-[#FFA255]">
                            Why Choose ChatterBox?
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-16">
                        Our platform is designed with your needs in mind, offering a seamless and secure communication experience.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FaUserFriends className="w-6 h-6 text-white" />,
                                title: "Connect with Anyone",
                                desc: "Find and connect with friends, family, and colleagues from around the globe."
                            },
                            {
                                icon: <FaLock className="w-6 h-6 text-white" />,
                                title: "Secure and Private",
                                desc: "Your conversations are protected with end-to-end encryption."
                            },
                            {
                                icon: <FaClock className="w-6 h-6 text-white" />,
                                title: "Always Available",
                                desc: "Stay connected anytime, anywhere with our reliable platform."
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="gradient-border bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6B35]/20"
                            >
                                <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-lg w-12 h-12 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#FF6B35]/30">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-400">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative bg-[#0d1117] font-sans text-white overflow-hidden pt-20 pb-8">
            {/* Decorative background glows for a modern, soft look */}
            <div className="absolute top-10 -left-20 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl opacity-40 animate-pulse"></div>
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-orange-600/20 rounded-full filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Main content grid for better alignment and spacing */}
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">

                    {/* Contact Form Section */}
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold tracking-tight">
                            Get in Touch
                        </h3>
                        <p className="text-gray-400 max-w-lg">
                            Have a project in mind or just want to say hello? Drop a message, and I'll get back to you.
                        </p>
                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="your.email@example.com"
                                className="w-full px-4 py-3 bg-gray-900/70 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                            />
                            <textarea
                                placeholder="Your message..."
                                rows="5"
                                className="w-full px-4 py-3 bg-gray-900/70 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 resize-none"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-lg hover:shadow-orange-500/30 transform hover:scale-105 transition-all duration-300 group"
                            >
                                <span>Send Message</span>
                                {/* Inline SVG for a paper plane icon, providing a clear visual cue */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                </svg>
                            </button>
                        </form>
                    </div>

                    {/* Creator Info & Links Section */}
                    <div className="space-y-6 md:pt-16">
                        <h4 className="text-xl font-semibold text-orange-400">
                            Created by Vrajesh Pandya
                        </h4>
                        <p className="text-gray-400">
                            A passionate full-stack developer crafting intuitive digital experiences with the MERN stack and exploring the frontiers of AI.
                        </p>
                        <div className="flex justify-start gap-5 pt-2">
                            <a href="https://github.com/VRAJESH-31" aria-label="GitHub Profile" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/vrajesh-n-pandya-a8ba25266/" aria-label="LinkedIn Profile" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider and Copyright notice */}
                <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Vrajesh Pandya. All Rights Reserved.</p>
                </div>
            </div>
        </footer>


        </div>
    );
};

export default Landing;