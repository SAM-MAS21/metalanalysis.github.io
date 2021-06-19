import React from "react";
import about_us from "../images/about-us.jpg";
import {
  Container,
  Row,
  Image,
  Breadcrumb,
  Button,
  Col,
  Card,Accordion
} from "react-bootstrap";
import "../css/About.css";

function About() {
  return (
    <>
      <Breadcrumb >
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>About-Us</Breadcrumb.Item>
      </Breadcrumb>

      <Container>
        <Row className="my-4">
          <Col sm={6} md={6} className="my-2">
          <h2 style={{ fontWeight: "700",color: "#10b7eb" }}>WHO ARE WE?</h2>
            <Image src={about_us} className="mt-4" rounded style={{ width: "100%" }} />
            <p className="mt-4 text-justify">
              This company was formerly known as Engineering Inspection Services
              (EIS). It was Re-launched with new identity as Metal Analysis and
              Services Private Limited in the year 1997 as a subsidiary of M/s
              Industrial X-ray & Allied Radiographers (I) Private Limited,
              Mumbai. A worldwide renowned NDT company. Metal Analysis and
              Services Private Limited (MAS) based in Mumbai, is a reputed,
              leading independent laboratory specialize in metal testing.
            </p>
            <p>
              For over 18 years, MAS has provided clients with Technical
              Services to meet a wide range of testing requirements .Its core
              team comprises of highly experienced professionals, engineers and
              qualified analysts .It is equipped with state of art machinery and
              facilities to cater requirements of the customers.
            </p>
            <p>
            <Accordion style={{backgroundColor:"#10b7eb"}}>
  <Card style={{backgroundColor:"#10b7eb",color:"white"}}>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="light"  eventKey="0">
        For More Details
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
              {/* <Button style={{ backgroundColor: "#10b7eb" }}>Learn more</Button> */}
            </p>
          </Col>
          <Col sm={6} md={6} className="my-2">
            <h2 style={{ fontWeight: "700",color: "#10b7eb" }} className="pb-4">WHY CHOOSE US?</h2>
           
<ul className="whychoose-list " >

  <li className="delivery-icon ">
    <h5 style={{fontWeight:"700"}}>DELIVERY TIME</h5>
    <p className="line-height" style={{textAlign:"justify"}}>Etiam porta sem malesuada magna mollis euismod. 
    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
  </li>
  
  <li className="history-icon">
  <h5 style={{fontWeight:"700"}}>SMART TECHNOLOGY</h5>
    <p className="line-height" style={{textAlign:"justify"}}>Etiam porta sem malesuada magna mollis euismod. 
    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
  </li>
  <li className="time-icon">
  <h5 style={{fontWeight:"700"}}>24/7 SUPPORT</h5>
    <p className="line-height" style={{textAlign:"justify"}}>Etiam porta sem malesuada magna mollis euismod. 
    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </p>
  </li>
</ul>

            {/* <i class="fas fa-shipping-fast fa-3x"></i>
           <h5 style={{ paddingLeft:"3" }}>DELIVERY TIME</h5>
            <p>For over 18 years, MAS has provided clients with Technical
              Services to meet a wide range of testing requirements </p> */}
           
          </Col>
        </Row>
      </Container>

      {/* <div className="about-us">
 
<Container>
    <Row>
    <Col style={{ justifyContent:"center" }}><Image src={about_us}   rounded/></Col>
    </Row>
</Container>
<p>This company was formerly known as Engineering Inspection Services (EIS). It was Re-launched with new identity as Metal Analysis and Services Private Limited in the year 1997 as a subsidiary of M/s Industrial X-ray & Allied Radiographers (I) Private Limited, Mumbai. A worldwide renowned NDT company. Metal Analysis and Services Private Limited (MAS) based in Mumbai, is a reputed, leading independent laboratory specialize in metal testing.


For over 18 years, MAS has provided clients with Technical Services to meet a wide range of testing requirements .Its core team comprises of highly experienced professionals, engineers and qualified analysts .It is equipped with state of art machinery and facilities to cater requirements of the customers.


A sophisticated quality assurance programme is in place to ensure consistent results of the test. The MAS testing facilities are used by National as well as International agencies. MAS is approved by various Public Sector, Government Undertakings and Inspection Agencies .The laboratory is accredited by NABL in the field of Mechanical and Chemical testing. MAS is the first laboratory in the country to be accredited by NABL as per ISO/IEC 17025:2005 for positive material identification (PMI) test, to be conducted in-house and on sites It is a leading laboratory based testing group, trusted by organizations to test and advice on the safety, quality, performance of their products and operations. It gets associated with the customer from development stage to the final stage.


MAS offers comprehensive spectrum of metal testing services, which include Mechanical Testing, Metallography , IGC tests, Coating Test, Failure Analysis, Chemical Analysis, Wet and Spectrographic, including PMI Test etc.


MAS endeavors to provide quality service to its customers. The laboratory is constantly upgraded with the latest and the finest machinery & equipments in metal testing.</p>
 
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</div> */}
    </>
  );
}

export default About;
