import express from 'express'
import asyncHandler from "express-async-handler"
import User from '../models/UserModel.js'

const userRoute = express.Router()

userRoute.post("/addtocart/:id", asyncHandler(
    async(req, res) => {
        try {
            const userCrr = await User.findByIdAndUpdate(req.params.id, {
                $push: {
                    cartList: {
                        "_id": req.body._id,
                        "name": req.body.name,
                        "image": req.body.image,
                        "description": req.body.description,
                        "rating": req.body.rating,
                        "numReviews": req.body.numReviews,
                        "price": req.body.price,
                        "countInStock": req.body.countInStock,
                        "type": req.body.type,
                        "reviews": req.body.reviews,
                    }
                }
            }, { new: true, upsert: true })

            res.status(200).json(userCrr)
        } catch (error) {
            res.status(500).json(error)
        }
    }
))

userRoute.post("/removetocart/:id", asyncHandler(
    async(req, res) => {
        try {
            const userCrr = await User.findByIdAndUpdate(req.params.id, {
                $pull: {
                    cartList: {
                        "_id": req.body._id,
                    }
                }
            }, { new: true, upsert: true })

            res.status(200).json(userCrr)
        } catch (error) {
            res.status(500).json(error)
        }
    }
))

userRoute.post("/removeAllCart/:id", asyncHandler(
    async(req, res) => {
        try {
            const userCrr = await User.findByIdAndUpdate(req.params.id, {
                $unset: {
                    cartList: ""
                }
            }, { new: true, upsert: true })

            res.status(200).json(userCrr)
        } catch (error) {
            res.status(500).json(error)
        }
    }
))
userRoute.get("/user/:id", asyncHandler(
    async(req, res) => {
        try {
            const userCrr = await User.findById(req.params.id)
            res.status(200).json(userCrr)
        } catch (error) {
            res.status(404).json(error)
        }
    }
))

export default userRoute