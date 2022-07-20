import express from "express";
import asyncHandler from "express-async-handler"
import Product from "../models/ProductModel.js";

const productRoute = express.Router()


//get all products
productRoute.get("/", asyncHandler(
    async(req, res) => {
        const products = await Product.find({})
        res.json(products)
    }
))

// Tìm kiếm
// Product.find({
//         price: { $gt: 200000 }
//     })
//     .then(data => {
//         console.log(data)
//     })


//get single product
productRoute.get("/:id", asyncHandler(
    async(req, res) => {
        const product = await Product.findById(req.params.id)
        if (product) {
            res.json(product)
        } else {
            res.status(404)
            throw new Error("Product not Found")
        }
    }
))

export default productRoute