const express = require("express");

const router = express.Router();

const mongoose = require("mongoose");

const User = require("../models/userModel");

router.post("/",async (req,res)=>{
    try{
        const inp = await User.create(req.body);

        res.send(inp);
    }
    catch(err){
        res.send(err);
    }
})

router.get("/",async (req,res)=>{
    try{
        const inp = await User.find().lean().exec();

        res.send(inp);
    }
    catch(err){
        res.send(err);
    }
})

module.exports = router;

// router.get("", async function(req, res) {
//     const products = await Product.find().lean().exec();
//     // return res.send(products);
//     return res.render("tshirtstore/tshirtStore", {products: products});
// });


// module.exports = router;