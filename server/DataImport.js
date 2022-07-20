import express from "express";
import products from "./data/products.js";
import users from "./data/users.js";
import Product from "./models/ProductModel.js";
import User from "./models/UserModel.js";
import asyncHandler from "express-async-handler"

const ImportData = express.Router()

ImportData.post("/user", asyncHandler(async(req, res) => {
    await User.remove({})
    const importUser = await User.insertMany(users)
    res.send({ importUser })
}))

ImportData.post("/product", asyncHandler(async(req, res) => {
    await Product.remove({})
    const importProdcuts = await Product.insertMany(products)
    res.send({ importProdcuts })
}))

export default ImportData