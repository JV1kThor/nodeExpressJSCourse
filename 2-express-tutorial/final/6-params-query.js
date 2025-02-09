const express = require("express");
const app = express();
const {products} = require("./data")


app.get("/", (req, res)=> {
    res.status(200).send('<h1>Home Page</h1><a href="/api/products">Products</a>')

})

app.get("/api/products", (req, res)=> {
    const newProduct = products.map((product)=> {
        const {id, name, image} = product;
        return {id, name, image}
    })
    res.json(newProduct)
})


app.get("/api/v1/query", (req, res)=> {
    console.log(req.query)
    const {search, limit} = req.query
    let sortedProducts = [...products]
    if (search) {
        sortedProducts = sortedProducts.filter((product)=> {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        // res.status(200).send("No products matched your search")
        return res.status(200).json({success:true, data:[]})
    }
    return res.status(200).json(sortedProducts)

})


/*
app.get("/api/products/1", (req, res)=> { 
    const singleProduct = products.find((product)=> product.id === 1)
    res.status(200).send(singleProduct)
})
*/

app.get("/api/product/:productID", (req, res)=> { 
    const productID = req.params["productID"] // or use req.params.productID --> officialy called rout parameters
    const singleProduct = products.find((product)=> product.id === Number(productID))

    if (!singleProduct) {
        res.status(404).send("Product doesen't exist.")
    }
    res.status(200).json(singleProduct)
})

app.get("/api/product/:productID/reviews/:reviewID", (req, res)=> {
    console.log(req.params)
    res.status(200).send("Hello world")
})

app.listen(5000, ()=> {
    console.log("Server is listening at port: 5000......")
})