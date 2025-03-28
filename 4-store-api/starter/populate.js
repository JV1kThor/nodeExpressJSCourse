require("dotenv").config()
const connectDB = require("./db/connect");

const Product = require("./models/product");
const jsonProducts = require("./products.json")

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        /*for (i = 0; i < jsonProducts.length; i++) {
            console.log(jsonProducts[i])
            // await Product.deleteMany();
            await Product.create(jsonProducts[i])
        }*/
        await Product.deleteMany();
        await Product.create(jsonProducts)
        process.exit(0)
    } catch (error) {
      console.log(error)
      process.exit(1)
    }

}

start()