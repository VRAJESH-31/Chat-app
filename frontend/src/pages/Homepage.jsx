import React from "react";
import { useChatStore } from "../store/useChatStore";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected"; // ✅ fixed import
import ChatContainer from "../components/ChatContainer";

const Homepage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen bg-base-200">
      {/* Navbar at top */}
      <Navbar />

      {/* Main chat layout */}
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
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
