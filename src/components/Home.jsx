import "./home.css"
import {Container,Row,Col,Image} from "react-bootstrap"

export default function Home () {
     return <div className="most-outer-div">
          <Container className="p-0" >
               <Row className="p-0" >
               < Row className="p-0 image-div">
                    <Image fluid className="mx-0 p-0"  src="https://via.placeholder.com/1136x576"></Image>
               </Row>
               <Row className="mx-0 p-0"  >
                    <Image className="banner-lower mx-0 px-0"  fluid src="http://via.placeholder.com/1136x98"></Image>
               </Row>
               <div className="border bank-offer  text-start p-0">
                    <h4>
                    <b> BANK OFFERS</b>
                    </h4>
               </div>
               <div className="bank-offer-list">
                    <Image fluid src="http://via.placeholder.com/176x224"  ></Image>
                    <Image fluid src="http://via.placeholder.com/176x224"  ></Image>
                    <Image fluid src="http://via.placeholder.com/176x224"  ></Image>
                    <Image fluid src="http://via.placeholder.com/176x224"  ></Image>
                    <Image fluid src="http://via.placeholder.com/176x224"  ></Image>
                    <Image fluid src="http://via.placeholder.com/176x224"  ></Image>
               </div>
               </Row>
               <Row className="p-0 m-0 dark">

               </Row>
          </Container>
     </div>
}