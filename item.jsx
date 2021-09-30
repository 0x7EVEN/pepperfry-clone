import { useState } from "react"
import "./item.css"

function Item(){
    const [Oprice,setOPrice] = useState(68999);
    const [Dprice, setDprice] = useState(30399);
    const [per,setPer] = useState(56);

    const data = [
        {
            image1:"https://ii1.pepperfry.com/media/catalog/product/j/o/266x293/jordan-rhs-sectional-sofa-in-blue-colour-jordan-rhs-sectional-sofa-in-blue-colour-lacgro.jpg",
            name : "Jordan RHS Sectional Sofa in Blue Colour",
            disPrice : 30559,
            oriPrice : 47999
        },
        {
            image1:"https://ii1.pepperfry.com/media/catalog/product/h/o/266x293/horse-on-panel-wall-art-with-led-in-multicolour-by-mahalaxmi-art-and-crafts-horse-on-panel-wall-art--s1xweb.jpg",
            name : "Horse On Panel Wall Art With Led",
            disPrice : 7199,
            oriPrice : 12238
        }
    ]

    const dataDis = data.reduce((a,b)=>{
        return a.disPrice+b.disPrice;
    })
    const dataOri = data.reduce((a,b)=>{
        return a.oriPrice+b.oriPrice;
    })


    return(<div>
        <div className="topBar">Home<span className="topW">&#x3e;</span>Sofas and Lounges<span className="topW">&#x3e;</span><span className="top2">Hajime 4 Seater Dining Set in Walnut & Navy Blue Finish</span></div>
        <div class="grid1">
            <div>
                <div className=" sticky">
                    <img className="img" src="https://ii1.pepperfry.com/media/catalog/product/j/o/568x284/jordan-rhs-sectional-sofa-in-blue-colour-jordan-rhs-sectional-sofa-in-blue-colour-2jrvp2.jpg" alt="wrong url"/>
                    <div style={{margin:"15px 0px"}}>
                        <img className="image2" src="https://ii1.pepperfry.com/media/catalog/product/j/o/568x284/jordan-rhs-sectional-sofa-in-blue-colour-jordan-rhs-sectional-sofa-in-blue-colour-2jrvp2.jpg"/>
                        <img className="image2" src="https://ii3.pepperfry.com/media/catalog/product/j/o/154x77/jordan-rhs-sectional-sofa-in-blue-colour-jordan-rhs-sectional-sofa-in-blue-colour-pjglzo.jpg"/>
                        <img className="image2" src="https://ii2.pepperfry.com/media/catalog/product/j/o/154x77/jordan-rhs-sectional-sofa-in-blue-colour-jordan-rhs-sectional-sofa-in-blue-colour-2hgeay.jpg"/>
                    </div>
                    <img className="image3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAu_nqoT42wQLJ43bxRReetCyQNAIjS6SNSg&usqp=CAU"/><span className="name9">Share This Product</span><span className="name10">Add to Wishlist<img className="image4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYYfQ9fOWMSy5mrTuOJSVhaxvOB4bIE7ZAqQ&usqp=CAU"/></span>
                </div>
            </div>
            <div style={{marginLeft:"0.5%"}}>
                <div className="name1">Hajime 4 Seater Dining Set in Walnut & Navy Blue Finish</div>
                <div className="name2">CasaCraft by Pepperfry</div>
                <div className="name3">Pepperfry Fullfiled<span className="name4">BEST SELLER</span></div>
                <div className="name7"><span style={{fontSize: "23px",color: "#F26522"}}>&#8377;</span><span className="name5"> {Dprice}  </span><span className="name6">&#8377; {Oprice} MRP</span>  (Inclusive of all taxes)</div>
                <div className="name7">Total Savings <span className="name8">  &#8377; {Oprice-Dprice} ({per}% Off)</span></div>
                <div className="name11">Selling at Best Price with Extra 10% Off<span style={{marginLeft:"50px"}}>at Checkout</span></div>
                <div style={{display:"grid",gridTemplateColumns:"150px 150px 100px 100px",marginTop:"10px",borderBottom:"1px solid rgb(206, 189, 189)",paddingBottom:"10px"}}>
                    <div className="name12">
                       <div style={{marginLeft:"40px"}}>EMI From ₹ 980 No Cost EMI</div>
                    </div>
                    <div className="name13">
                       <div style={{marginLeft:"40px"}}>36 Month's Warranty</div>
                    </div>
                    <div className="name14">
                       <div style={{marginLeft:"40px"}}>Easy Returns</div>
                    </div>
                    <div className="name15">
                       <div style={{marginLeft:"40px"}}>Safe Delivery</div>
                    </div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"100px 400px",marginTop:"25px"}}>
                    <div style={{marginTop:"70%"}} className="side">Color</div>
                    <div style={{display:"grid",gridTemplateColumns:"190px 190px"}}>
                        <img style={{marginBottom:"20px",border: "1px solid #FF7F41"}}  src="https://ii1.pepperfry.com/media/catalog/product/j/o/154x77/jordan-rhs-sectional-sofa-in-blue-colour-jordan-rhs-sectional-sofa-in-blue-colour-2jrvp2.jpg"/>
                        <img  src="https://ii1.pepperfry.com/media/catalog/product/j/o/154x77/jordan-rhs-sectional-sofa-with-pouffe-in-beige-and-brown-colour-by-muebles-casa-jordan-rhs-sectional-bris3y.jpg"/>
                        <img  src="https://ii1.pepperfry.com/media/catalog/product/j/o/154x77/jordan-rhs-sectional-sofa-in-blue-and-grey-colour-by-muebles-casa-jordan-rhs-sectional-sofa-in-blue--g1lsph.jpg"/>
                        <img  src="https://ii1.pepperfry.com/media/catalog/product/j/o/154x77/jordan-rhs-sectional-sofa-in-brown-colour-jordan-rhs-sectional-sofa-in-brown-colour-01yp3c.jpg"/>
                    </div>
                </div>
                <div style={{marginTop:"20px"}} className="side">Seating <button className="btn1">3 Seater</button><button className="btn2">2 Seater</button><button className="btn2">1 Seater</button></div>
                <div className="block">
                    <div className="side">More Offers:</div>
                    <div className="part2">
                        <div className="hdfc">HDFC EMI</div>
                        <div className="hdfc1">
                           Get Extra Rs.1,500 Off on HDFC EMI Purchases of Rs.10,000 and Above. Code: <span style={{fontWeight:"bold",color:"black"}}>HDFCPF1500</span>
                        </div>
                        <div style={{marginTop:"10px"}} className="hdfc">HDFC Bank Credit Card</div>
                        <div className="hdfc1">
                            Get Extra Rs.1,000 Off on Purchases through HDFC Credit Card. Applicable on Orders Above Rs.10,000<br/> Code : <span style={{fontWeight:"bold",color:"black"}}> HDFCPF1000</span>
                        </div>
                        <div className="hdfc" style={{marginTop:"10px"}}>No Cost EMI</div>
                        <div className="hdfc1">Get up to 6 months EMI with 0% interest rate</div>
                    </div>
                </div>
                <div className="side">
                    Quantity
                    <select className="option">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                    </select>
                </div>
                <div className="underline">
                    <button className="btn3">ADD TO CART</button>
                    <button className="btn4">BUY NOW</button>
                </div>
                <div className="delivery">
                    Delivery
                    <input className="delInp" type="text" placeholder="Pincode"></input>
                    <button className="delbtn">APPLY</button> 
                    <div className="delImg"><span className="delivery2">Pepperfry Fulfilled, Get It By Wed, 13 Oct Delivery - FREE For Today</span></div>
                    <div className="delImg1"><span className="delivery2">Assembly Offered By Pepperfry Within 24 Hours Assembly - ₹ 449</span></div> 
                    <div className="delImg3"><span style={{marginLeft:"35px"}} className="delivery2">Nearest Studio Pepperfry, Pepperfry Banjara Hills (25 km away)</span></div>   
                </div>
                <div>
                    <div>Details<span className="detail1">Brand</span><span style={{marginLeft:"0px"}} className="detail2"> : CasaCraft</span></div>
                    <div className="detail2"><span className="detailbold">Dimensions</span> : H26 x W x 73 x D 32.5; Seating height :18 (all dimensions are in inches)</div>
                    <div className="detail2"><span className="detailbold">Weight</span> : 32 KG</div>
                    <div className="detail2"><span className="detailbold">Waranty</span> : 36 Month's Warranty</div>
                    <div className="detail2"><span className="detailbold">Assembly</span> : Carpenter Assembly</div>
                    <div className="detail2"><span className="detailbold">Primary Material</span> : Fabric</div>
                    <div className="detail2"><span className="detailbold">Room Type</span> : Living Room</div>
                    <div className="detail2"><span className="detailbold">Collection</span> : Serena</div>
                    <div className="detail2"><span className="detailbold">Seating Height</span> : 18</div>
                    <div className="detail2"><span className="detailbold">Colour</span> : Blue</div>
                    <div className="detail2"><span className="detailbold"> Sku</span> : FN1850478-S-PM26363</div>
                </div>
            </div>
        </div>
        <div className="nextdiv">
            <div>BOUGHT TOGETHER</div>
            <div className="nextgrid">
                {data.map((el)=>{
                    return <div className="back">
                       <div style={{margin:"5px 0px 0px 5px"}}>
                            <input className="myinput" type="checkbox"/>
                            <select style={{marginLeft:"170px",height:"23px",marginBottom:"5px"}} className="option">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                            </select>
                       </div>
                       <img style={{width:"245px",marginLeft:"10px"}} src={el.image1}/>
                       <div className="font">{el.name}</div>
                       <div className="font" style={{marginTop:"5px"}}><span style={{fontWeight:"bold"}}>&#8377; {el.disPrice} </span><span className="font1"> &#8377; {el.oriPrice}</span></div>
                    </div>
                })}
                <div style={{marginTop:"100px"}}>
                    <span style={{marginLeft:"200px",marginTop:"100px"}} className="font3">&#8377; {dataDis} </span><span style={{fontSize:"14px"}} className="font1">&#8377; {dataOri} MRP</span>
                    <div style={{margin:"0px 0px 10px 190px"}} className="font4">Total Savings &#8377; {dataOri-dataDis} (off)</div>
                    <button className="btn4 btn5" style={{backgroundImage:"none",border:"2px dashed #948686",color:"black"}}>EPIC OFFERS DAILY</button>
                    <button className="btn4 btn5">BUY SET</button>
                </div>
                
            </div>
        </div>
    </div>)
}

export {Item}