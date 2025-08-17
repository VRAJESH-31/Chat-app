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
        <div className="flex-1 flex flex-col bg-white dark:bg-gray-950">
            <ChatHeader />

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {chatMessages.length > 0 ? (
                    <>
                        {chatMessages.map((message) => (
                            <div key={message._id}
                                className={`flex items-end gap-3 ${message.senderId === authuser?._id ? "justify-end" : "justify-start"}`}>
                                <div className={`flex-shrink-0 ${message.senderId === authuser?._id ? "order-2" : "order-1"}`}>
                                    <div className="size-10 rounded-full border-2 border-orange-400 overflow-hidden">
                                        <img
                                            src={
                                                message.senderId === authuser?._id
                                                    ? authuser?.profilePic || "/avatar.png"
                                                    : selectedUser?.profilePic || "/avatar.png"
                                            }
                                            alt="profile"
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </div>

                                <div className={`max-w-xs sm:max-w-md ${message.senderId === authuser?._id ? "order-1" : "order-2"}`}>
                                    <div className="flex items-center gap-1 text-xs text-gray-400 mb-1">
                                        <span>{message.senderId === authuser?._id ? authuser?.fullName : selectedUser?.fullName}</span>
                                        <time>{formatMessageTime(message.createdAt)}</time>
                                    </div>
                                    <div className={`${message.senderId === authuser?._id
                                        ? "bg-gradient-to-r from-orange-500 via-red-400 to-orange-600 text-white rounded-br-none"
                                        : "bg-white/70 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none"
                                        } px-4 py-2 rounded-lg shadow-lg`}>
                                        {message.text && <p>{message.text}</p>}
                                        {message.image && (
                                            <img
                                                src={message.image}
                                                alt="Attachment"
                                                className="max-w-[220px] rounded-lg shadow-md mt-2"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div ref={messageEndRef}></div>
                    </>
                ) : (
                    <p className="text-center text-gray-500">No messages yet.</p>
                )}
            </div>

            <MessageInput />
        </div>
    );
};

export default ChatContainer;
