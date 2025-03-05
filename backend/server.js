import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./route/product.js";
dotenv.config();

const app = express();
app.use(express.json());  //it allow us to parse(use) the json data in the request body

app.get("/", (req, res) => {
    res.send("server is ready");
});

app.use("/api/products",productRoutes);  //this is used to use the productRoutes in the app

// console.log(process.env.mongo_url);  we can use this to check the connection string
app.listen(5000, () => {
    connectDB();
    console.log("server is running on port 5000 and http://localhost:5000");
});