import React from "react";
import { useChatStore } from "../store/useChatStore";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected"; // ✅ fixed import
import ChatContainer from "../components/ChatContainer";

const Homepage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
    {/* Navbar at top */}
    <Navbar />

    {/* Main chat layout */}
    <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-white/80 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg shadow-xl w-full max-w-6xl h-[calc(100vh-8rem)] border border-gray-200/50 dark:border-slate-700/50">
            <div className="flex h-full rounded-lg overflow-hidden">
                {/* Sidebar always visible */}
                <Sidebar />

                {/* Conditional rendering */}
                {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
            </div>
        </div>
    </div>
</div>
  );
};

export default Homepage;
