const product = require("../models/product")

const getAllProductsStatic = async (req, res) => {
    //throw new Error("testing async errors") //we don't use next because express-async-errors does it automatically
    const currentProducts = await product.find({ price: { $gt: 30 } })
        .sort("price")
        .select("name price")
        .limit()
        .skip()
    // $regex: e $options: are MongoDB (not mongoose) operators - for more info check 
    res.status(200).json({
        success: true,
        msg: "products testing rounte",
        nbHits: currentProducts.length,
        data: currentProducts
    })
}

const getAllProducts = async (req, res) => {
    const { featured, company, name, sort, fields, numericFilters/*, limit, skip*/ } = req.query
    console.log(req.query)
    const queryObject = {}
    if (featured) {
        queryObject.featured = featured === "true" ? true : false
    }
    if (company) {
        queryObject.company = company
    }
    if (name) {
        queryObject.name = { $regex: name, $options: "i" }
    }
    if (numericFilters) {
        const operatorMap = {
            ">": "$gt",
            ">=": "$gte",
            "=": "$eq",
            "<": "$lt",
            "<=": "$lte",
        }
        const regEx = /\b(<|>|>=|=|<|<=)\b/g;
        let filters = numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-`)
        console.log(filters)
        const options = ["price", "rating"]
        filters = filters.split(",").forEach((item) => {
            const [field, operator, value] = item.split("-")
            if (options.includes(field)) {queryObject[field] = {[operator]: Number(value)}}
        });
    }

    let result = product.find(queryObject)

    if (sort) {
        const sortList = sort.split(",").join(" ") // my solution .replace(",", " ")
        result.sort(sortList)
    } else {
        result.sort("createdAt")
    }
    if (fields) {
        const filterList = fields.split(",").join(" ") // my solution .replace(",", " ")
        result.select(filterList)
    }
    /*
    if (limit) {
        const filterLimit = limit.split(",").join(" ") // my solution .replace(",", " ")
        result.limit(filterLimit)
    }
    if (skip) {
        const filterSkip = skip.split(",").join(" ") // my solution .replace(",", " ")
        result.skip(filterSkip)
    }
    */
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit)

    const currentProducts = await result
    res.status(200).json({
        success: true,
        msg: "products testing rounte dynamically",
        nbHits: currentProducts.length,
        data: currentProducts,
    })
}

const getProduct = async (req, res) => {
    const { id: productID } = req.params
    const currentProducts = await product.findOne({ _id: productID })
    res.status(200).json({ success: true, data: currentProducts })
}

const deleteProduct = async (req, res) => {
    const { id: productID } = req.params
    const currentProducts = await product.deleteOne({ _id: productID })
    res.status(200).json({ success: true, msg: `Product ${productID} eliminated` })
}

const createProduct = async (req, res) => {
    const currentProduct = req.body
    await product.create(currentProduct)
    return res.status(200).json({
        success: true,
        msg: "product created",
        data: currentProduct
    })
}

module.exports = {
    getAllProductsStatic,
    getAllProducts,
    createProduct,
    getProduct,
    deleteProduct,
}