import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express(); // Express instance
dotenv.config(); // Load env

const PORT = process.env.PORT || 7000; // 7000 is alt port
const MONGOURL = process.env.MONGO_URL;

// Define the schema for the foodCategory collection
const foodCategorySchema = new mongoose.Schema({
  // Define the fields and their types here
  CategoryName: String,
});

// Create the model for the foodCategory collection
const foodCategory = mongoose.model('foodCategory', foodCategorySchema);

// Connect the express app with MongoDB using Mongoose
mongoose.connect(MONGOURL)
  /*.then(() => {
    console.log("Database connected successfully");

    app.listen(PORT, () => {
      console.log(`Server is running on Port ${PORT}`);
    });

    // Fetch data from the foodCategory collection
    foodCategory.find({})
      .then(fetched_data => {
       // console.log(fetched_data);
      })
      .catch(err => {
        console.error(err);
      });
  })*/
  .catch((err) => {
    console.error("Database connection error:", err);
  });
