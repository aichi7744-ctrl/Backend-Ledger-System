const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({

    fromAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "account",
        required: [true, "Transaction must be associated with a sender account"],
        index: true
    },

    toAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "account",
        required: [true, "Transaction must be associated with a receiver account"],
        index: true
    },

    status: {
        type: String,
        enum: {
            values: ["PENDING", "COMPLETED", "FAILED", "REVERSED"],
            message: "Invalid transaction status"
        },
        default: "PENDING"
    },

    amount: {
        type: Number,
        required: [true, "Amount is required"],
        min: [0, "Transaction amount cannot be negative"]
    },

    idempotencyKey: {
        type: String,
        required: [true, "Idempotency key is required"],
        unique: true,
        index: true
    }

}, { timestamps: true });

const transactionModel = mongoose.model("transaction", transactionSchema);

module.exports = transactionModel;