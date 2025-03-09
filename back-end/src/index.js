import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js'
import { connectDB } from './lib/db.js';

dotenv.config();
const app = express();

app.use("/api/auth" , authRoutes);

const PORT = process.env.PORT;

app.listen(PORT , ()=>{
    console.log("The app is listening on the port " + PORT);
    connectDB();
})