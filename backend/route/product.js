import express from "express";
import { createproduct,deleteproduct,getallproducts,updateproduct } from "../controller/product.controller.js";

const router = express.Router();
router.post("/",createproduct);

router.delete("/:id",deleteproduct);

router.get("/",getallproducts);

router.put("/:id",updateproduct);

export default router;
