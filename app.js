const express = require("express");
const app = express();

const mongoose = require("mongoose");
const port = 8080;
const Product = require("./models/product.js");
main()
.then(()=>{
    console.log("connection to DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/product');
}
app.get("/sampletesting",async(req,res)=>{
    let sampleProduct= new Product({
       productid:"xyss",
       name:"one piece",
       description:"made with cotton blend",
       catogory:"women wear",
       color:"red",
       size:"l",

    });
    await sampleProduct.save();
    console.log("sample saved");
    res.send("sucessful testing");
});
app.get("/",(req,res)=>{
    res.send("connection sucessfull with root");
});
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});