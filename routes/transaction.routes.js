const {Router} = require("express")
const {authSystemUseMiddleware, authMiddleware} = require("../middleware/auth.middleware")
const transactionController = require("../controllers/transaction.controller")

const transactionRoutes = Router()

transactionRoutes.post("/system/initial-funds", authSystemUseMiddleware, transactionController.createInitialFundsTransaction )
transactionRoutes.post("/", authMiddleware, transactionController.createTransaction )

module.exports = transactionRoutes;