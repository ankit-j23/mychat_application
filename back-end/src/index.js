import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.route.js'
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'

import { app , server } from './lib/socketio.js';

dotenv.config();

app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use("/api/auth" , authRoutes);
app.use("/api/message" , messageRoutes)

const PORT = process.env.PORT;

server.listen(PORT , ()=>{
    console.log("The app is listening on the port " + PORT);
    connectDB();
})