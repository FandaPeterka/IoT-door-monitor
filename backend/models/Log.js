const mongoose = require("mongoose");

const logSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            required: true,
        },
        doorId: {
            type: String,
            ref: "Door",
            required: true,
        },
        severity: {
            type: String,
            required: true,
            enum: ["info", "warning", "error", "success"],
        },
        message: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        _id: false,
        timestamps: {createdAt: "createdAt", updatedAt: "updatedAt"},
    }
);

module.exports = mongoose.model("Log", logSchema);