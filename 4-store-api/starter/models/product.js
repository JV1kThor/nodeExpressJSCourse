const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name must be provided"],
        trim: true,
        maxlength: [20, "Must have less than 15 characters"]
    },
    price: {
        type: Number,
        required: [true, "Product price must be provided"]
    },
    featured: {
        type: Boolean, 
        default: false
    },
    rating: {
        type: Number,
        default: 4.5
    },
    createdAt: {
        type: Date,
        default: Date.now()

    },
    company: {
        type: String,
        require: [true, "Company name must be provided"],
        enum : {
            values: ["ikea", "liddy", "caressa", "marcos"],
            message : "{Value} is not supported",
        }
        //enum: ["ikea", "liddy", "caressa", "marcos"],
    },
})

module.exports = mongoose.model("Product", ProductSchema)