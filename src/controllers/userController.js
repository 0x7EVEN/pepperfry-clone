const express = require("express");

const router = express.Router();

const mongoose = require("mongoose");

const Product = require("../models/productModel");

// router.post("/", async (req, res) => {
//     try {
//         const product = await Product.create(req.body);

//         res.send(product);
//     }
//     catch (err) {
//         res.send(err);
//     }
// });

// router.get("/", async (req, res) => {
//     try {
//         const product = await Product.find().lean().exec();

//         res.send(product);
//     }
//     catch (err) {
//         res.send(err);
//     }
// });
// router.get("/:id", async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         res.send(product);
//     }
//     catch (err) {
//         res.send(err);
//     }
// });

// router.put("/addtocart", async function(req, res) {
//     const data = req.body;
//     console.log('data:', data);
//     try {
//         const user = await findByID(data.userID);
//         if (user.cart.length === 0) {
//             user.cart.push({
//                 data: data.item,
//                 quantity: data.quantity,
//                 tracking: "in cart"
//             });
//         } else {
//             let flag = true;
//             const cart = user.cart;
//             for (let i = 0; i < cart.length; i++) {
//                 if (cart[i].data === data.item) {
//                     flag = false;
//                     if (data.quantity > 0) {
//                         cart[i].quantity += data.quantity;
//                     }
//                 }
//             }
//             if (flag) {
//                 cart.push({
//                     data: data.item,
//                     quantity: data.quantity > 0 ? data.quantity : 1,
//                     tracking: "in cart"
//                 });
//             }
//         }

//         console.log(user);

//     } catch(err){
//         res.send(err)
//     }
// })


//

// const express = require("express");

// const router = express.Router();

// const mongoose = require("mongoose");

const User = require("../models/userModel");

router.post("/", async (req, res) => {
    try {
        const inp = await User.create(req.body);

        res.send(inp);
    }
    catch (err) {
        res.send(err);
    }
});

router.get("/", async (req, res) => {
    try {
        const inp = await User.find().lean().exec();

        res.send(inp);
    }
    catch (err) {
        res.send(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const inp = await User.findById(req.params.id);

        res.send(inp);
    }
    catch (err) {
        res.send(err);
    }
});

router.get("/:id/cart", async (req, res) => {
    try {
        const inp = await User.findById(req.params.id).populate("cart.data")
        console.log('inp:', inp)

        res.status(201).json(inp.cart);
    }
    catch (err) {
        res.send(err);
    }
});



router.put("/addtocart", async function(req, res) {
    
    try {
        const data = req.body;
        data.quantity*=1
        //console.log('data:', data);
        const user = await User.findById(req.body.userID);
        // console.log("user",user);
        if (user.cart.length === 0 && data.quantity>0) {
            user.cart.push({
                data: data.item,
                quantity: Number(data.quantity),
                tracking: "in cart"
            });
        } else {
            let flag = true;
            for (let i = 0; i < user.cart.length; i++) {
                if (user.cart[i].data == data.item) {
                    console.log('user1234:', user.cart[i])
                    flag = false;
                    
                    if (Number(data.quantity) > 0) {
                        user.cart[i].quantity += Number(data.quantity);
                    } else {
                        if (Number(user.cart[i].quantity) + Number(data.quantity) <= 0 || user.cart[i].data ==null) {
                            user.cart.splice(i, 1);
                            //console.log('user:', user)
                        }
                        else {
                            user.cart[i].quantity += data.quantity;
                        }
                    }
                    break;
                }
            }



            if (flag) {
                //console.log('flag:', flag)
                user.cart.push({
                    data: data.item,
                    quantity: data.quantity > 0 ? data.quantity : 1,
                    tracking: "in cart"
                });
            }
        }

        //user.cart = []
        
        const use = await User.findByIdAndUpdate(data.userID,user,{next:true});
        //console.log("use",use);
        res.send(use)

    } catch (err) {
        console.log(err)
        res.send(err);
    }
});


// router.delete("/:id", async (req, res) => {
//     try {
//         const product = await Product.findByIdAndDelete(req.params.id);

//         res.send(product);
//     }
//     catch (err) {
//         res.send(err);
//     }
// });


module.exports = router;

// router.get("", async function(req, res) {
//     const products = await Product.find().lean().exec();
//     // return res.send(products);
//     return res.render("tshirtstore/tshirtStore", {products: products});
// });


// module.exports = router;