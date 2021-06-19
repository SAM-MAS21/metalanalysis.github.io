import React from "react";
import { Container, Row, Col,Breadcrumb } from "react-bootstrap";
import "../css/Services.css";
import spectro from "../images/spectrochemical.JPG";
import weight from "../images/wet-analysis.JPG";
import tensil from "../images/tensile.jpg";
import hardness from "../images/hardness.jpg";
import impact from "../images/impact.jpg";
import bend from "../images/bend.JPG";
import metalgraphy from "../images/metallography.JPG";
import corrossion from "../images/corrosion.jpg";
import failure from "../images/failure.JPG";
import PMI from "../images/pmi.JPG";
import FM from "../images/ferrite.JPG";
import NDT from "../images/ndt.JPG";

function Service() {
  return (
    <>
      
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Services</Breadcrumb.Item>
      </Breadcrumb>

      



<Container className="wrapperS">
  <Row className="gy-3 mb-5">
    <Col sm={4}>
    <div className="cardS">
    <img src={spectro} />
    <div className="infoS">
      <h1>SPECTROCHEMICAL ANALYSIS</h1>
      <p>loremNostrud consectetur mollit velit in aliqua pariatur incididunt occaecat consequat ullamco sunt irure.</p>
      <a href="#" className="btn">Read More</a>
    </div>
  </div>
    </Col>
    <Col sm={4}><div className="cardS">
    <img src={weight} />
    <div className="infoS">
      <h1>WET ANALYSIS</h1>
      <p>loremNostrud consectetur mollit velit in aliqua pariatur incididunt occaecat consequat ullamco sunt irure.</p>
      <a href="#" className="btn">Read More</a>
    </div>
  </div></Col>
    <Col sm={4}> <div className="cardS">
    <img src={tensil} />
    <div className="infoS">
      <h1>TENSILE TESTING</h1>
      <p>loremNostrud consectetur mollit velit in aliqua pariatur incididunt occaecat consequat ullamco sunt irure.</p>
      <a href="#" className="btn">Read More</a>
    </div>
  </div></Col>
  {/* <Col sm={3}> <div className="cardS">
    <img src={tensil} />
    <div className="infoS">
      <h1>TENSILE TESTING</h1>
      <p>loremNostrud consectetur mollit velit in aliqua pariatur incididunt occaecat consequat ullamco sunt irure.</p>
      <a href="#" className="btn">Read More</a>
    </div>
  </div></Col> */}
  </Row>
  </Container>



  <Container className="wrapperS">
  <Row className="gy-3 mb-5">
    <Col sm={4}>
    <div className="cardS">
    <img src={hardness} />
    <div className="infoS">
      <h1>HARDNESS TESTING</h1>
      <p>loremNostrud consectetur mollit velit in aliqua pariatur incididunt occaecat consequat ullamco sunt irure.</p>
      <a href="#" className="btn">Read More</a>
    </div>
  </div>
    </Col>
    <Col sm={4}><div className="cardS">
    <img src={impact} />
    <div className="infoS">
      <h1>IMPACT TEST</h1>
      <p>loremNostrud consectetur mollit velit in aliqua pariatur incididunt occaecat consequat ullamco sunt irure.</p>
      <a href="#" className="btn">Read More</a>
    </div>
  </div></Col>
    <Col sm={4}> <div className="cardS">
    <img src={bend} />
    <div className="infoS">
      <h1>BEND TEST</h1>
      <p>loremNostrud consectetur mollit velit in aliqua pariatur incididunt occaecat consequat ullamco sunt irure.</p>
      <a href="#" className="btn">Read More</a>
    </div>
  </div></Col>
  </Row> 
  </Container>

  <Container className="wrapperS">
  <Row className="gy-3 mb-5">
    <Col sm={4}>
    <div className="cardS">
    <img src={metalgraphy} />
    <div className="infoS">
      <h1>METALLOGRAPHY</h1>
      <p>loremNostrud consectetur mollit velit in aliqua pariatur incididunt occaecat consequat ullamco sunt irure.</p>
      <a href="#" className="btn">Read More</a>
    </div>
  </div>
    </Col>
    <Col sm={4}><div className="cardS">
    <img src={corrossion} />
    <div className="infoS">
      <h1>CORROSION TESTING</h1>
      <p>loremNostrud consectetur mollit velit in aliqua pariatur incididunt occaecat consequat ullamco sunt irure.</p>
      <a href="#" className="btn">Read More</a>
    </div>
  </div></Col>
    <Col sm={4}> <div className="cardS">
    <img src={failure} />
    <div className="infoS">
      <h1>FAILURE ANALYSIS</h1>
      <p>loremNostrud consectetur mollit velit in aliqua pariatur incididunt occaecat consequat ullamco sunt irure.</p>
      <a href="#" className="btn">Read More</a>
    </div>
  </div></Col>
  </Row>  
  </Container>

  <Container className="wrapperS">
  <Row className="gy-3 mb-5">
    <Col sm={4}>
    <div className="cardS">
    <img src={PMI} />
    <div className="infoS">
      <h1>POSITIVE MATERIAL IDEN. (PMI)</h1>
      <p>loremNostrud consectetur mollit velit in aliqua pariatur incididunt occaecat consequat ullamco sunt irure.</p>
      <a href="#" className="btn">Read More</a>
    </div>
  </div>
    </Col>
    <Col sm={4}><div className="cardS">
    <img src={FM} />
    <div className="infoS">
      <h1>FERRITE MEASUREMENT</h1>
      <p>loremNostrud consectetur mollit velit in aliqua pariatur incididunt occaecat consequat ullamco sunt irure.</p>
      <a href="#" className="btn">Read More</a>
    </div>
  </div></Col>
    <Col sm={4}> <div className="cardS">
    <img src={NDT} />
    <div className="infoS">
      <h1>NON-DESTRUCTIVE TESTING</h1>
      <p>loremNostrud consectetur mollit velit in aliqua pariatur incididunt occaecat consequat ullamco sunt irure.</p>
      <a href="#" className="btn">Read More</a>
    </div>
  </div></Col>
  </Row> 
  </Container>

       


  {/* */}
  {/* */}
  {/* */}
{/* // </Container> */}
{/* <Container >
 
  
 
</Container> */}


    </>
  );
}

export default Service;
