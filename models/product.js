const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
    productid:{
        type:String,
    },
    name:{
        type:String,
    },
    price:{
        type:Number,
    },
    description:{
        type:String,
    },
    category:{
        type:String,
    },
    color:{
        type:String,
    },
    size:{
        type:String,
    },
});

const Product = mongoose.model("Product",productSchema);
module.exports = Product;