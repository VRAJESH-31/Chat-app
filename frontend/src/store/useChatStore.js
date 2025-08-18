import { create } from "zustand";
import { persist } from "zustand/middleware";
import toast from "react-hot-toast";
import axiosInstance from "../lib/axios";
import { io } from "socket.io-client";

export const useChatStore = create(
    persist(
        (set, get) => ({
            messages: [],
            users: [],
            selectedUser: null,
            isUsersLoading: false,
            isMessagesLoading: false,

            // set active chat user and reset messages
            setSelectedUser: (user) => set({ selectedUser: user }),

            getUsers: async () => {
                set({ isUsersLoading: true });
                try {
                    const res = await axiosInstance.get("/message/users");
                    set({ users: res.data });
                } catch (error) {
                    toast.error(error?.response?.data?.message || "Failed to load users");
                } finally {
                    set({ isUsersLoading: false });
                }
            },

            getMessages: async (userId) => {
                if (!userId) return;
                set({ isMessagesLoading: true });
                try {
                    const res = await axiosInstance.get(`/message/${userId}`);
                    set({ messages: res.data || [] });
                } catch (error) {
                    toast.error(
                        error?.response?.data?.message || "Failed to load messages"
                    );
                } finally {
                    set({ isMessagesLoading: false });
                }
            },

            sendMessage: async (messageData) => {
                const { selectedUser } = get();
                if (!selectedUser?._id) {
                    toast.error("No user selected");
                    return;
                }
                try {
                    await axiosInstance.post(
                        `/message/send/${selectedUser._id}`,
                        messageData
                    );
                } catch (error) {
                    toast.error(
                        error?.response?.data?.message || "Failed to send message"
                    );
                }
            },

            // Socket listener
            subscribeToMessages: (socket, authUserId) => {
                if (!socket || !authUserId) return;
                socket.on("newMessage", (newMessage) => {
                    const { messages } = get();
                    if (!messages.some((msg) => msg._id === newMessage._id)) {
                        set({ messages: [...messages, newMessage] });
                    }
                });
            },

            unsubscribeFromMessages: (socket) => {
                if (!socket) return;
                socket.off("newMessage");
            },

            connectSocket: (authuser) => {
                if (!authuser?._id) return null;
                return io("https://chat-app-yqx9.onrender.com", {
                    transports: ["websocket"],
                    withCredentials: true,
                    query: { userId: authuser._id }
                });
            }
        }),
        {
            name: "chat-app-store", // key in localStorage
            partialize: (state) => ({
                selectedUser: state.selectedUser,
                messages: state.messages,
            }),
        }
    )
);
