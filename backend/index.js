import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

const app =express()//express instance
dotenv.config();//load env

const PORT= process.env.PORT || 7000; //7000 is alt port
const MONGOURL =process.env.MONGO_URL;

//connect the express with mongodb compass
mongoose.connect(MONGOURL).then(()=>{
    console.log("database connceted successfully");
    app.listen(PORT, ()=>{
        console.log(`Server is running on Port ${PORT}`);
    });
}).catch((error) =>console.log("error"));

//to fetch the data user schema
const userSchema = new mongoose.Schema({
    CategoryName:String,
    
});

const UserModel = mongoose.model("Users",userSchema)

//display the data
app.get("/getUsers", async(req,res)=>{
    const userData =await UserModel.find();
    res.json(userData);
});