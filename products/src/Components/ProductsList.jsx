import { useState } from "react"
import data from "./ProductsData.json"
// console.log(data)
import styled from "styled-components"
import {Link} from "react-router-dom"
const ProCards = styled.div`
/* border: 1px solid black; */
display: grid;
grid-template-columns: repeat(2,40%);
gap:0.8%;
margin-left:30%;
.pro{
    border: 1px solid white;
    background-color:white;
    max-width:100%;
    max-height:500px;
    border-radius:10px;
    padding:4%;
    position: relative;
    .btn{
    display:none;
    position: absolute;
    left:5%;
    top:36%;
    opacity:0.5;
    width:90%;
    height:30px;
}&:hover{
    .btn{
    display:block;
    cursor: pointer;

    }
    }
}
.pro > button{
    justify-content:center;
    margin-left:35%;
}
.pro > span{
    font-weight:300;
    font-size: 12px;
}
.top_div{
    height: 400px;
}

`;
const Topdiv = styled.div`
    height: 60px;
    background-color:white;
    text-align:center;
    padding-top:1%;
`;
const Secdiv = styled.div`
    height: 40px;
    background-color:white;
    text-align:center;
`;
const Thirddiv = styled.div`
margin-left:30%;
span{
    margin-left:43%;
}
`;
const Filterdiv = styled.div`
float:left;
height:300px;
/* border: 1px solid black; */
width:18%;
margin-left:5%;
background-color: white;
padding:2%;
position: fixed;
span{
font-weight: 500;
font-size: 14px;
line-height: 17px;
letter-spacing: 0.02em;
}
`;
const Showbtn = styled.button`
background-color: #F26522;
justify-content: center;
margin-top: 5%;
margin-left: 45%;
color:white;
height:48px;
width:28%;
border:none;
`;

function Products() {
    const [products, setProducts] = useState(data.data)
    // console.log(products.data)
    return (
        <>
            
            <Topdiv className="top_div">
                Search results for <br/>
                Sofa sets
            </Topdiv>
            <Secdiv>
                Furniture Furnishings
            </Secdiv>
            <Thirddiv>
                <p> 171 Options in Sofa Sets <span>SortBy:<select style={{background:"white",border:"0.5px solid #C5C5C5"}}>
                <option>Revelence</option>
                <option>Price low to high</option>
                <option>Price high to low</option>    
                </select></span></p>
            </Thirddiv>
            <Filterdiv>
                <p>Home</p> 
                <h4>Apply Filters</h4>
                <hr/>
                <p>Brand </p>
                <input type="checkbox"/> <span>CasaCraft (171)</span> <br/>
                <input type="checkbox" /> <span>Woodsworth (171)</span> <br/>
                <input type="checkbox"/> <span>Furny (70)</span> <br/>
                <input type="checkbox" /> <span>Furnitech (47)</span> <br/>
                <input type="checkbox"/> <span>Durian (171)</span> <br/>
            </Filterdiv>
        <ProCards>
                {/* <div style={{border:"1px solid yellow"}}> */}
                
                {products.map((e) =>
                    <div key={e.id} className="pro">
                        <div><Link to={`/pro/${e.id}`}>
                            <img src={e.pro_img} alt="something" style={{ maxWidth: "100%",paddingTop:"5px" }} />
                            <div><button className="btn" key={e.id}>Add to cart</button></div></Link>
                        </div>
                    <h4>{e.pro_name}</h4>
                    <p style={{fontSize: "12px",color: "#969696"}}>{e.category}</p>
                    <p>₹{e.price}</p>
                    <span>Offer: {e.offer}</span><br/>
                    <span style={{color:"#14A9CC",fontSize:"12px",fontWeight:"normal"}}>{e.cash_back}</span>
                    <p><img src={e.ship_icon} alt="icon ship"/> {e.ships}</p>
                    
                </div>
            )}
                {/* </div> */}
           
            </ProCards>
             <Showbtn>SHOW MORE OPTIONS(27)</Showbtn>
            </>
    )
}

export default Products