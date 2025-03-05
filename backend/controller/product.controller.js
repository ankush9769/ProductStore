import Product from "../models/product.js";
import mongoose from "mongoose";

export const createproduct = async(req,res)=>{      //this is endpoint for creating a new product
    const product = req.body;
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false ,message:"All fields are required"});
    }
    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json({success:true , product:newProduct});
    } catch (error) {
        res.status(500).json({success:false , message:"Internal server error"});
    }
}

export const deleteproduct = async(req,res)=>{       //this is endpoint for deleting a product
    const {id} = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true , message:"Product deleted successfully"});
    } catch (error) {
        res.status(500).json({success:false , message:"server error"});
    }
}

export const getallproducts = async(req,res)=>{    //this is endpoint for getting all products
    try {
        const products = await Product.find({});
        res.status(200).json({success:true , products});
    } catch (error) {
        console.log("error in getting products",error);
        res.status(500).json({success:false , message:"Internal server error"});
    }
}

export const updateproduct = async(req,res)=>{  //put request is used to update a existing product
    const {id} = req.params;
    const product = req.body;
    // if(!mongoose.Types.ObjectId.isValid(id)){
    //     return res.status(404).json({success:false ,message:"Invalid product id"});
    // }    
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({success:true , data:updatedProduct});
    } catch (error) {
        res.status(500).json({success:false , message:"Internal server error"});
    }
}
