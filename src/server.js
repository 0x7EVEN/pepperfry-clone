const connect = require("./configs/db");
const express = require("express");

const app = express();

app.use(express.json());

const userController = require("./controllers/userController");
const productController = require("./controllers/productsController");

app.use("/signup",userController);
app.use("/products",productController);





app.listen("4321",async ()=>{
    await connect();
    console.log("Listening to port 4321");
})



