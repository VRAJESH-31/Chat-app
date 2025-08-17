import { useChatStore } from "../store/useChatStore";
import { useEffect, useMemo, useRef } from "react";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import useAuth from "../store/useAuth";
import { formatMessageTime } from "../lib/utils";
import MessageSkeleton from "./skeletons/MessageSkeleton";

const ChatContainer = () => {
    // ✅ Hydration guard: wait until Zustand store is restored
    const hasHydrated = useChatStore.persist.hasHydrated();

    // Important: Don't render until hydration done or you will lose persisted data
    if (!hasHydrated) {
        return null;
    }

    const {
        messages,
        getMessages,
        isMessagesLoading,
        selectedUser,
        subscribeToMessages,
        unsubscribeFromMessages,
    } = useChatStore();

    const { authuser, socket } = useAuth();
    const messageEndRef = useRef(null);

    // Global socket listener
    useEffect(() => {
        if (socket && authuser?._id) {
            subscribeToMessages(socket, authuser._id);
        }
        return () => {
            if (socket) unsubscribeFromMessages(socket);
        };
    }, [socket, authuser?._id]);

    // Fetch messages when a chat is selected or after reload
    useEffect(() => {
        if (selectedUser?._id) {
            getMessages(selectedUser._id);
        }
    }, [selectedUser?._id]);

    const chatMessages = useMemo(() => {
        if (!selectedUser) return [];
        return messages.filter(
            (m) =>
                (m.senderId === authuser?._id && m.receiverId === selectedUser._id) ||
                (m.receiverId === authuser?._id && m.senderId === selectedUser._id)
        );
    }, [messages, selectedUser, authuser?._id]);

    useEffect(() => {
        if (messageEndRef.current && chatMessages.length > 0) {
            messageEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [chatMessages]);

    if (isMessagesLoading) {
        return (
            <div className="flex-1 flex flex-col overflow-auto">
                <ChatHeader />
                <MessageSkeleton />
                <MessageInput />
            </div>
        );
    }

    return (
        <div className="flex-1 flex flex-col bg-slate-900/50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/40 to-transparent">
            {/* Animation styles for incoming messages */}
            <style>
                {`
                @keyframes fly-in {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fly-in {
                    animation: fly-in 0.4s ease-out forwards;
                }
                `}
            </style>

            <ChatHeader />

            <div className="flex-1 overflow-y-auto p-6 space-y-5">
                {chatMessages.length > 0 ? (
                    <>
                        {chatMessages.map((message) => (
                            <div
                                key={message._id}
                                className={`flex items-end gap-3 animate-fly-in ${message.senderId === authuser?._id ? "justify-end" : "justify-start"}`}
                            >
                                {/* Avatar with elegant ring effect */}
                                <div className={`flex-shrink-0 ${message.senderId === authuser?._id ? "order-2" : "order-1"}`}>
                                    <img
                                        src={message.senderId === authuser?._id ? authuser?.profilePic : selectedUser?.profilePic}
                                        alt="profile"
                                        className="size-9 rounded-full object-cover ring-2 ring-offset-2 ring-offset-slate-900 ring-slate-700"
                                    />
                                </div>

                                {/* Message Content */}
                                <div className={`max-w-xs sm:max-w-md ${message.senderId === authuser?._id ? "order-1" : "order-2"}`}>
                                    <div className={`flex items-center gap-2 text-xs text-slate-500 mb-1 ${message.senderId === authuser?._id ? "justify-end" : ""}`}>
                                        <span>{message.senderId === authuser?._id ? authuser?.fullName : selectedUser?.fullName}</span>
                                        <time>{formatMessageTime(message.createdAt)}</time>
                                    </div>

                                    {/* Message Bubble with refined styles */}
                                    <div
                                        className={`px-4 py-2.5 rounded-xl ${message.senderId === authuser?._id
                                            ? "bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-br-none shadow-lg shadow-orange-900/30"
                                            : "bg-slate-800 text-gray-200 rounded-bl-none shadow-md shadow-black/20"
                                        }`}
                                    >
                                        {message.text && <p className="text-sm leading-relaxed">{message.text}</p>}
                                        {message.image && (
                                            <img
                                                src={message.image}
                                                alt="Attachment"
                                                className="max-w-[220px] rounded-lg shadow-md mt-2 border border-black/10"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div ref={messageEndRef}></div>
                    </>
                ) : (
                    <div className="text-center text-slate-500 pt-10">
                        <p>No messages yet.</p>
                        <p className="text-xs">Be the first to say hello!</p>
                    </div>
                )}
            </div>

            <MessageInput />
        </div>
    );
};

export default ChatContainer;
