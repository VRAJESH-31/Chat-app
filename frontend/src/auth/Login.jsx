import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const LoginPage = () => {
    const navigate = useNavigate();

    const handleStart = (e) => {
        e.preventDefault(); // prevent form refresh
        navigate("/Homepage");
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0d0f12] via-[#13161c] to-[#1c1f26] font-sans overflow-x-hidden">
            <Navbar showIcons={false} />

            <main className="flex flex-1 justify-center items-center px-4 py-10">
                <div className="bg-[#1f232b] border border-[#2a2f37] rounded-2xl shadow-xl p-10 w-full max-w-md transition-all duration-300">
                    <h2 className="text-center text-3xl font-bold text-white mb-6 tracking-wide">Welcome Back</h2>
                    
                    <form className="space-y-5" onSubmit={handleStart}>
                        <input
                            type="text"
                            placeholder="Email or Username"
                            className="w-full rounded-lg bg-[#2b3138] border border-[#3b4149] px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full rounded-lg bg-[#2b3138] border border-[#3b4149] px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition"
                        />

                        <div className="text-right">
                            <a href="#" className="text-sm text-cyan-400 hover:underline">Forgot password?</a>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-4 py-3 font-bold text-white shadow-lg shadow-cyan-500/30 transition-transform transform hover:scale-[1.02]"
                        >
                            LOGIN
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-400 mt-6">
                        Don&apos;t have an account?{" "}
                        <button
                            type="button"
                            onClick={() => navigate('/signup')}
                            className="text-cyan-400 hover:underline font-medium"
                        >
                            Sign up
                        </button>
                    </p>
                </div>
            </main>
        </div>
    );
};

export default LoginPage;
