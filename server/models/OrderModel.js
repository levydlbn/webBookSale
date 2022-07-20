import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
    },
    infoReceiver: {
        hoten: { type: String, required: true },
        sdt: { type: String, required: true }
    },
    orderItems: {
        type: Array,
        require: true,
        default: []
    },
    shippingAddress: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
    },
    paymentMethod: {
        type: String,
        required: true,
        default: "PaymentOnDelivery"
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false,
    },
    deliveredAt: {
        type: Date
    },
}, {
    timestamps: true,
})


const Order = mongoose.model("Order", orderSchema)

export default Order