import express from 'express';
import dotenv from 'dotenv';

import { connectDB } from './lib/db.js';
import authRoutes from './routes/auth.route.js';
const app = express();
app.use(express.json());
dotenv.config();

app.use("/api/auth", authRoutes)

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log('Server is running on PORT:',PORT);
    connectDB();
});