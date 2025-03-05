import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
    }
},{timestamps:true})   //timestamps is used to store the date and time of the product

const Product = mongoose.model("Product",productSchema);  //Product is the model name and productSchema is the schema

export default Product;

