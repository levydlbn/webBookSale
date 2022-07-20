import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    nameuser: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true
    },
    sdt: {
        type: String,
        require: true,
    },
    location: {
        type: String,
        require: true,
    },
    birtday: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        require: true,
        default: false,
    },
    cartList: {
        type: Array,
        require: true,
        default: [],
    }
}, {
    collection: 'User'
})

const User = mongoose.model("User", userSchema)

export default User