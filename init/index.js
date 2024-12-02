const mongoose= require("mongoose");
const Product = require("../models/product.js");
const initData=require("./data.js");

main()
.then(()=>{
    console.log("connected to Db");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/product");
}

const initDB=async ()=>{
    await Product.deleteMany({});
    await Product.insertMany(initData.data);
    console.log("data was initialized");
};
initDB();