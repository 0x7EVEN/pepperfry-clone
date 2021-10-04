import axios from "axios";
import { useEffect } from "react";
import { useState,useContext} from "react";
import styled from "styled-components"
import { LoginContext } from "../../context/loginContext";
import {Link} from "react-router-dom";

const Navdiv = styled.div`
display:grid;
grid-template-columns:30% 70%;
gap:5%;
height:80px;
/* border:1px solid black; */
background-color:white;
.one{
    /* border:1px solid black; */
    img{
    max-width:100%;
    padding-top:5%;
    padding-left:30%;
}
}
.two{
    p{
        color:rgb(150,150,153);
    }
      span{
          color:#F26522;
      }
}
`;
const CartDis = styled.div`
display:grid;
grid-template-columns:63% 33%;
gap:2%;
padding-left:4%;
padding-right:2%;
background-color:white;

.pro_div{
            border:1px solid rgb(240,240,240);
    height:650px;
    .pin_div{
        max-height:70px;
        /* border:1px solid black ; */
        background-color:rgb(245,245,245);
        padding:1%;
        button{
            background-color:black;
            color:white;
            height:41px;
            width:50px;
        }
        input{
            height:35px;
            margin-left:1%;
        }
        img{
            max-width:14px;
            margin-right:1%;

        }
    }
    .pro_display{
        border:1px solid rgb(240,240,240);
        /* height:200px; */
        img{
            max-width:20%;
            padding:3%;
            float:left;
        }
        button{
            float:right;
            margin-top:2%;
            border:none;
            margin-left:5%;
            background-color:white;
            img{
                max-width:100%;
            }
        }
        .qty{
            float:right;
            display:flex;
            margin-top:2%;
            div{
                width:35px;
                height:25px;
                border:1px solid black;
                text-align:center;
            }
        }
    }
}
.cash_div{
    /* border:1px solid black; */
    height:500px;
    .cash_one{
        max-height:90px;
        border:1px solid rgb(240,240,240);
        padding-left:3%;
        padding-right:3%;
        p{
            margin-top:0px;
            color:rgb(150,150,153);
        }
    }
    .cash_two{
        /* border:1px solid black; */
        margin-top:20px;
        input{
            width:70%;
            height:40px;

        }
        button{
            width:27%;
            height:46px;
            background-color:#F26522;
            color:white;
            border:none;
        }
    }
    .cash_three{
        margin-top:20px;
        border:1px solid rgb(240,240,240);
        /* height:200px; */
        p{
            color:#525252
        }
        span{
            color:#6C9D10
        }
    }
    .cash_four{
        margin-top:20px;
        border:1px solid rgb(240,240,240);
        /* height:200px; */
        p{
            color:#525252
        }
        span{
            color:#6C9D10
        }
        button{
            width:100%;
            background-color:#F26522;
            color:white;
            margin-top:15px;
            height:48px;
            border:none;
        }
    }
}
`;
const Checkfooter = styled.div`
display:grid;
grid-template-columns:repeat(3,31%);
/* border:1px solid black; */
height:200px;
background-color:#EFEFEF;
max-width:92%;
margin:auto;
gap:4%;
margin-top:2%;
.card{
/* border:1px solid black; */
/* display:grid;
grid-template-columns:repeat(4,20%) */
p{
    margin-left:10%;
    color:#969696;
}
img{
    border-style:none;
    max-width:100%
}
li{
    vertical-align:middle;
    display:inline-block;
    margin-right: 14px;
    margin-bottom: 15px;
    text-align: center;
}
}
.emi{
/* border:1px solid black; */
p{
    margin-left:10%;
    color:#969696;
}
ul{

    li{
        background:url("https://ii1.pepperfry.com/images/svg/calendar-1.svg") no-repeat left 5px;
        list-style-type:none;
        background-size: 20px 15px;
        span{
            margin-left:25px;
        }
    }
}

}
.secure{
/* border:1px solid black; */
p{

    color:#969696;
}
img{
    margin-right:3%;
}

}
`;
function Cart() {

    const {login,setLogin} = useContext(LoginContext);
    const [cart ,setCart] = useState(false);

    // function GetCart(){
    //     axios.get(`http://localhost:4321/signup/${"6156b5a6ff17ae025803738e"}`)
    //     .then((res)=>{
    //         setCart(res.data.Cart);
    //     })
    // }

    function Get(){
        axios.get(`http://localhost:4321/signup/${"6156b5a6ff17ae025803738e"}/cart`)
        .then((res)=>{
            setCart(res.data);
            console.log('res.data:', res.data)

        })
        .catch(err=>{
            setCart(false);
        })
    }

    useEffect(()=>{
        // if(login){
            Get()
        // }
    },[])

    const handleDelete = (id)=>{
        console.log(id);
        axios.put("http://localhost:4321/signup/addtocart",{
            item : id,
            quantity : -10000,
            userID : "6156b5a6ff17ae025803738e"
        })
        .then((res)=>{
            Get()
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const handleValue = (val,id)=>{
        console.log(id);
        axios.put("http://localhost:4321/signup/addtocart",{
            item : id,
            quantity : val,
            userID : "6156b5a6ff17ae025803738e"
        })
        .then((res)=>{
            Get()
        })
        .catch(err=>{
            console.log(err)
        })
    }



    return cart ? (<div>
            <Navdiv>
                <div className="one">
                    <img src="https://ii1.pepperfry.com/images/svg/pf-logo-jan18.svg?v=1" alt="something"/>
                </div>
                <div className="two">
                    <p>
                        <span> <img src="https://th.bing.com/th/id/OIP.hfixL5WZFsUKi6RLwMNlkQAAAA?pid=ImgDet&w=414&h=400&rs=1" alt="something" style={{maxWidth:"25px"}}/><br/>Cart</span>-----Delivery & Billing Address --------payment

                 <span> <img src="https://image.flaticon.com/icons/png/512/18/18666.png" alt="something" style={{maxWidth:"18px",marginLeft:"50%"}}/></span></p>
                </div>
            </Navdiv>
            <hr />
            <div style={{background:"white"}}>
            <div style={{paddingLeft:"4%",background:"white"}}><h3>In YOUR CART</h3></div>
            <CartDis>
                <div className="pro_div">
                <div className="pin_div">
                <span><img src="https://th.bing.com/th/id/OIP.7l-1Z8IIUYoOPOpy9g76CAHaI6?pid=ImgDet&rs=1" alt="something" />Enter Your Pincode For Delivery & Assembly Information   <input placeholder="Pincode"/><button>GO</button></span>
                        </div>
                        {cart.map((el)=>{
                            {if(el==null)return;}
                            {console.log('el:', el.data)}
                            return <div className="pro_display">
                                <img src={el.data.colorImage[0].images[0]} alt="something"/>
                                <button><img src="https://ii1.pepperfry.com/images/svg/checkout-wish-icon.svg" alt="something" /></button>
                                <button onClick={()=>{handleDelete(el.data._id)}}><img src="https://ii1.pepperfry.com/images/svg/checkout-bin-icon.svg" alt="something" /></button>
                                <div className="qty">
                                    <button onClick={()=>{handleValue(-1,el.data._id)}}>-</button>
                                    <div>{el.quantity}</div>
                                    <button onClick={()=>{handleValue(1,el.data._id)}}>+</button>
                                </div>
                                <h3>{el.data.name}</h3>
                                <span>{el.data.details.Waranty} Months Warranty ,100% Geninue</span>
                                <div style={{float:"right",marginRight:"33%",color:"orange"}}>{el.data.disPrice}</div>
                                {/* add original priced line through section */}
                                <p>Delivered by <br/>Enter your pincode </p>
                            </div>
                        })}
                </div>
                    <div className="cash_div">
                        <div className="cash_one">
                            <h4>Login OR Register</h4>
                            <p>For Express Checkout ,Exciting Offers & More</p>
                        </div>
                        <div className="cash_two">
                          <input placeholder="Enter Coupon Code"/><button>Apply</button>
                        </div>
                        <div className="cash_three">
                            <div><p>Cart Value</p></div>
                           <div><span>Retail Discount</span></div>
                           <div><p>Give India</p></div>
                            <div><p>Delivery & Assembly Charges.Enter Pincode To Know</p></div>
                            <hr/>
                           <div><h4>Total</h4></div>
                           <div><p>No cost EMI Available Starting ₹4.350/month.EMI Starting ₹1,229/month</p></div>
                        </div>
                        <div className="cash_four">
                            <input type="checkbox" /> Contribute Rs.99 For COVID Relief Through Give India
                            <br/><br/>
                            <input type="checkbox" /> Use GSTIN For Business Purchase (Optional)
                            <button><Link style={{textDecoration:"none",color:"white"}} to="/checkout">PLACE ORDER</Link></button>
                        </div>
                </div>
            </CartDis>
            </div>
            <Checkfooter>
                <div className="card">
                 <p> We Accept</p>
                 <ul>
               <li><img src="https://ii2.pepperfry.com/images/new-visa-logo.png" alt="something"/></li>
               <li><img src="https://ii2.pepperfry.com/images/800-px-maestro-logosvg.png" alt="something"/></li>
               <li><img src="https://ii2.pepperfry.com/images/american-express-icon.png" alt="something"/></li>
               <li><img src="https://ii2.pepperfry.com/images/d-i-n-e-r-s-c-a-r-d-1.png" alt="something"/></li>
               <li><img src="https://ii2.pepperfry.com/images/220-px-ru-paysvg.png" alt="something"/></li>
               <li><img src="https://ii2.pepperfry.com/images/mastercard-logo-png.png" alt="something"/></li>
               <li><img src="https://ii2.pepperfry.com/images/982-wallet.png" alt="something"/>Banking</li>
               <li><img src="https://ii2.pepperfry.com/images/985-netbanking.png" alt="something"/>Wallets</li>
               </ul>
                </div>
                <div className="emi">
                <p>BUY SAFE,PAY EASY</p>
                    <ul>
                        <li>
                            <span>No Cost EMIs</span>
                            " Now pay in easy installments at no additional cost"
                        </li>
                </ul>
                </div>
                <div className="secure">
                    <p>100% SAFE & SECURE</p>
                    <img src="https://ii2.pepperfry.com/images/download-1.png" alt="something" />
                   <img src="https://ii2.pepperfry.com/images/p-c-i-d-s-s.png" alt="something"/>

                </div>

            </Checkfooter>
   </div>) : <div>...make empty cart</div>



}



export {Cart}