const express = require("express");
const router = express.Router()

const {getAllProductsStatic, getAllProducts, createProduct, getProduct, deleteProduct} = require("../controllers/products")

router.get("/", getAllProducts)
router.get("/static", getAllProductsStatic)
router.get("/:id", getProduct)
router.delete("/:id", deleteProduct)
router.post("/", createProduct)

module.exports = router