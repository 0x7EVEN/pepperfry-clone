const connect = require("./configs/db");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const userController = require("./controllers/userController");
const productController = require("./controllers/productsController");
const loginController = require("./controllers/loginController");
const searchController = require("./controllers/searchController");

app.use("/signup", userController);
app.use("/products", productController);
app.use("/login", loginController);
app.use("/search", searchController);




app.listen("4321", async () => {
    await connect();
    console.log("Listening to port 4321");
});