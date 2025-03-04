import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("server is ready");
});
// console.log(process.env.mongo_url);  we can use this to check the connection string
app.listen(5000, () => {
    connectDB();
    console.log("server is running on port 5000 and http://localhost:5000");
});