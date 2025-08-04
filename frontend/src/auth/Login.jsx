import React from "react";
import { FaComments } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate("/Homepage");
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0f1114] to-[#1a1e23] font-sans overflow-x-hidden">
            <header className="flex items-center justify-between border-b border-gray-700 px-6 py-4 shadow-md backdrop-blur-md">
                <div className="flex items-center gap-3 text-white">
                    <FaComments className="h-6 w-6 text-blue-500" />
                    <h1 className="text-xl font-bold tracking-tight">ChatApp</h1>
                </div>
                <nav className="hidden md:flex gap-6 items-center text-sm font-medium text-white">
                    <a href="#" className="hover:text-blue-400">Product</a>
                    <a href="#" className="hover:text-blue-400">Download</a>
                    <a href="#" className="hover:text-blue-400">Pricing</a>
                    <button onClick={handleStart} className="rounded-full bg-blue-600 hover:bg-blue-700 px-5 py-2 transition">
                        Sign In
                    </button>
                </nav>
            </header>

            <main className="flex flex-1 justify-center items-center px-4 py-10">
                <div className="bg-[#1a1e23] border border-gray-700 rounded-xl shadow-lg p-8 w-full max-w-md">
                    <h2 className="text-center text-2xl font-bold text-white mb-4">Welcome back</h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Email or Username"
                            className="w-full rounded-lg bg-[#2b3138] border border-gray-600 px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full rounded-lg bg-[#2b3138] border border-gray-600 px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                        />
                        <div className="text-right">
                            <a href="#" className="text-sm text-blue-400 hover:underline">Forgot password?</a>
                        </div>
                        <button
                            onClick={handleStart}
                            type="submit"
                            className="w-full rounded-full bg-blue-600 hover:bg-blue-700 px-4 py-3 font-bold text-white transition"
                        >
                            Sign In
                        </button>
                    </form>
                    <p className="text-center text-sm text-gray-400 mt-4">
                        Don&apos;t have an account?{" "}
                        <a href="#" className="text-blue-400 hover:underline">Sign up</a>
                    </p>
                    
                </div>
            </main>
        </div>
    );
};

export default LoginPage;
