import express from "express";
import asyncHandler from "express-async-handler"
import Order from "../models/OrderModel.js";

const orderRoute = express.Router()

orderRoute.post("/user/:id", asyncHandler(
    async(req, res) => {
        try {

            const {
                infoReceiver,
                orderItems,
                shippingAddress,
                paymentMethod,
                shippingPrice
            } = req.body


            const addOrder = await new Order({
                user: req.params.id,
                infoReceiver: infoReceiver,
                orderItems: orderItems,
                shippingAddress: shippingAddress,
                paymentMethod: paymentMethod,
                shippingPrice: shippingPrice,
            })

            const createOrder = await addOrder.save()
            res.status(200).json(createOrder)

        } catch (error) {
            res.status(500).send(error)
        }
    }
))

orderRoute.get("/listorder/:id", asyncHandler(
    async(req, res) => {
        try {
            const listOrder = await Order.find({ user: req.params.id })
            res.status(200).json(listOrder)
        } catch (error) {
            res.status(500).send(error)
        }
    }
))

export default orderRoute