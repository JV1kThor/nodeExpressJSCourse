
const mongoose = require("mongoose");

const JobsSchema = new mongoose.Schema(
    {
    company: {
        type: String,
        required: [true, "Please provide company name"],
        trim: true,
        maxlength: [50, "Must have maximum 50 char!"]
    },

    position: {
        type: String,
        required: [true, "Please provide position"],
        trim: true,
        maxlength: [100, "Must have maximum 100 char!"]
    },

    status: {
        type: String,
        enum: ['interview', 'declined', 'pending'],
        default: "pending",

    },

    createdBy: {
        type: mongoose.Types.ObjectId, // means that we pass the userID as value to that parameter
        ref: "User", // which model are we refering to
        enum: ['interview', 'declined', 'pending'],
        required: [true, "please provide user"],
    }, 
},

{ timestamps: true }
)

module.exports = mongoose.model("Job", JobsSchema)