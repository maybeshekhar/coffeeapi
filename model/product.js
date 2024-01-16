const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
   brand: {
      type: String,
      enum:{
        values: ["Blue Tokai", "Bru", "Sleepy Owl", "Nescafe", "Koraput"],
        message: `{Value} is not supported`
      },
      required: true,
     
   },
   name: {
    type: String,
    required: true,
   },
   price: {
    type:Number,
    required: [true, "price must be provided"]
   },
   rating: {
    type: Number,
    required: true,
   },
   createdAt: {
    type: Date,
    default: Date.now(),
   },

});


module.exports = mongoose.model('Product', productSchema);