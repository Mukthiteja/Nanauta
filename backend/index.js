import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';  // Import the CORS middleware

const app = express();
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL)
  .then(async () => {
    console.log("Database connected successfully");

    // Use the CORS middleware with specific settings
    app.use(cors({
      origin: 'http://localhost:5173',  // Allow requests from this origin
      methods: ['GET', 'POST'],         // Allow these HTTP methods
      allowedHeaders: ['Content-Type']  // Allow these headers
    }));

    app.use(express.json());

    const createUserRoutes = await import('./Routes/CreateUser.js');  // Correct path and file name
    app.use('/api', createUserRoutes.default);

    app.listen(PORT, () => {
      console.log(`Server is running on Port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
