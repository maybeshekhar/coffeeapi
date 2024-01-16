require("dotenv").config();

const express = require('express');

const app = express();

const connectDB = require("./db/connect.js");

const PORT = process.env.PORT || 4000;


const productsRoutes = require("./routes/products")

app.get('/', (req,res) => {
    res.send('Hi, I am live')
})

//middleware
app.use("/api/products", productsRoutes)


const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        app.listen( PORT, () => {
            console.log('http://localhost:4000/ is working');
        })
    } catch (error) {
        console.log(error);
    }
}


start();