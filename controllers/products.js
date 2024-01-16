
const Product = require("../model/product.js");

const allProducts = async(req, res) => {
    const myData = await Product.find( req.query );
    res.status(200).json({ myData }) 
};

module.exports = { allProducts};