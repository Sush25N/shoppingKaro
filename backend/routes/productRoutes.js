import express from "express";
const router = express.Router();
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js"

router.get('/',  asyncHandler( async (req, res) => {
    const products = await Product.find({});
    res.json(products);
}));

router.get('/:id', asyncHandler( async (req, res) => {
    const product = await Product.findById(req.param.id);
    
    if (product) {
        return res.json(product);
    }

    res.status(500).json({ message: 'Product Not Found'});
    
}));

export default router;