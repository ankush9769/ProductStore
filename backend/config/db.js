import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.mongo_url);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error in MongoDB ${error.message}`);
        process.exit(1);
    }
}
