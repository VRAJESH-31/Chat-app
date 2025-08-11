import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { connectDB } from './lib/db.js';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';

const app = express();
app.use(express.json());
dotenv.config();

app.use(cookieParser()); 
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes)

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log('Server is running on PORT:',PORT);
    connectDB();
});