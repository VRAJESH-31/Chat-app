// lib/socket.js
import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: [
            "http://localhost:5173",
            "https://chat-app-pearl-phi.vercel.app"
        ],
        methods: ["GET", "POST"],
        credentials: true,
    },
});

// Map userId to socketId
const userSocketMap = {};

export function getReceiverSocketId(userId) {
    return userSocketMap[userId];
}

io.on("connection", (socket) => {
    console.log("Connected socket id:", socket.id);

    const userId = socket.handshake.query.userId;
    if (userId) {
        userSocketMap[userId] = socket.id;
    }

    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log("Disconnected:", socket.id);
        if (userId) {
            delete userSocketMap[userId];
        }
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

export { io, app, server };

const socket = io("https://chat-app-yqx9.onrender.com", {
    transports: ["websocket"],
    withCredentials: true,
    query: { userId: authuser._id }
});
