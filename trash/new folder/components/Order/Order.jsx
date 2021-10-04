import img1 from "./images/image 67.png";
import img2 from "./images/Group 117.png";
import "./Order.css";
import { data } from "./data.js";
import styled from "styled-components";

const Navdiv = styled.div`
display:grid;
grid-template-columns:30% 70%;
/* gap:5%; */
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

export default function Order() {
  return (
    <div>
      <Navdiv>
                <div className="one">
                    <img src="https://ii1.pepperfry.com/images/svg/pf-logo-jan18.svg?v=1" alt="something"/>
                </div>
                <div style={{alignItems:"center",alignContent:"center" ,marginTop:"12px"}}   className="two">
                    <p>
                           {/* <img src="https://th.bing.com/th/id/OIP.hfixL5WZFsUKi6RLwMNlkQAAAA?pid=ImgDet&w=414&h=400&rs=1" alt="something" style={{maxWidth:"25px",marginLeft:"6.5%",float:"left"}}/><span> */}
                    <br/>

                        <span><img src="https://image.flaticon.com/icons/png/512/18/18666.png" alt="something" style={{maxWidth:"18px",marginLeft:"50%"}}/></span></p>
                </div>
      </Navdiv>
      <div className="totalDetails">
        <div>306145615</div>
        <div>23rd february, 2021 | 22:08:12 IST</div>
        <div>Rs. 23,399</div>
      </div>

      {data.map((e) => {
        return (
          <div className="itemDetails">
            <img src={e.img} alt="" />

            <div className="itemQty">
              <p>{e.title}</p>
              <div className="qtyPrice">
                <p>Qty: {e.qty}</p>
                <p>Rs. {e.price}</p>
              </div>
            </div>

            <div>Delivery By: {e.date}</div>

            
          </div>
        );
      })}

      <div className="tracking">
        <div>
          <img src={img2} alt="" />
        </div>
        <div className="status">
          <div>
            <b>Ordered and Approved 27 Sep </b>
          </div>
          <div>Shipping 30 Sep</div>
          <div>Out for Delivery 2nd Oct</div>
          <div>Arriving by 2nd Oct</div>
        </div>
      </div>
    </div>
  );
}
