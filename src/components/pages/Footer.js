import React from 'react';
import { Col, Container, Row,Modal, Button } from 'react-bootstrap';
import '../css/Footer.css';
import tnc from '../pdf/TnC.pdf';

function Footer(){
    return(
        <>
<div >

  </div>
  <Container fluid className="footer">
    <Row>
       <Col>
       <p> &#169; 2021 copyright. Metal Analysis Services Private Limited | <a href={tnc} download="Terms & Condition" style={{textDecoration:"none",color:"white"}}>Terms & Conditions</a></p> 
      
       </Col>
       
      
    </Row>
</Container>

  {/* style={{textAlign:"center", backgroundColor:"#10b7eb"}} */}
        </>
    )
}

export default Footer;