import React from "react";
import { Col, Container, Row, Image, Form, Button, Jumbotron,Breadcrumb } from "react-bootstrap";
import img3 from "../images/con1.png";
import "../css/Contact.css";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";





function Contact() {


  const notify = () => toast("Sending....");
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_12nj3mk', 'template_yndmsxl', e.target, 'user_E76vvvSeDdq7Zxzw4rxy7')
      .then((result) => {
          console.log(result.text);
          toast.success("Send Successfull", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
      }, (error) => {
          console.log(error.text);
          toast.error(error.text);
          toast.warn("Error", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
      });
      e.target.reset()
  }



  return (
    <>
    <Breadcrumb>
        <Breadcrumb.Item  href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Contact-US</Breadcrumb.Item>
      </Breadcrumb>

      <Container className="my-5">
        <h2 id="connect"> Connect With US </h2>
        <Row className="mt-5">
          <Col sm={6}>
          <ToastContainer />
            <Form onSubmit={sendEmail}>
              <Form.Group controlId="formBasicText">
                <Form.Label id="formlable">Full Name</Form.Label>
                <Form.Control type="text" name="name" id="form1" data-validation-required-message="please inter your Name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label id="formlable">Email Address</Form.Label>
                <Form.Control type="email" name="email" id="form1" />
              </Form.Group>

              <Form.Group controlId="formBasicText">
                <Form.Label id="formlable">Subject</Form.Label>
                <Form.Control type="text" name="subject" id="form1" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label id="formlable">Message</Form.Label>
    <Form.Control id="form1" as="textarea" name="msg" rows={3} />
  </Form.Group>
              <Button
                id="btn4"
                style={{ backgroundColor: "#10B7EB" }}
                type="submit"
                onClick={notify}
              >
                Submit
              </Button>
              {/* <ToastContainer /> */}
            </Form>
          </Col>
          <Col sm={6} className="gy-3 mt-2">
            
            <Image id="image" src={img3} />
            
          </Col>
        </Row>
      </Container>
      <hr style={{ border: "1px solid #10b7eb" }} />
      <Container className="my-5">
      
      <Row id="address">
          <Col sm={4}>
            <h4 id="connect">Head Office</h4>
            <p id="p">
              219 / 233 / 201, Bussa Udyog Bhavan, Tokersey Jivraj Road, Sewree
              (West), Mumbai-400015
            </p>
          </Col>
          <Col sm={4}>
            <h4 id="connect">Phone</h4>
            <p id="p">
              Tel : 022-24131160 / 24130813 / 24148369  <br />
              Mobile : +91 8104681526
            </p>
           
          </Col>

          <Col sm={3}>
            <h4 id="connect">Email</h4>

            <p id="p">metalanalysis1997@gmail.com info@metalanalysis.in</p>
          </Col>
        </Row>
     
        <hr  style={{ border: "1px solid #10b7eb" }}   />
        <Row id="address">
        <h3 style={{textAlign:"center", color:"#10b7eb",fontWeight:"700", fontSize:"1.8rem"}} className="pt-1 pb-5" >Collection Center</h3>
   
          <Col sm={4}>
            <h4 id="connect">Palghar Office</h4>
            <p id="p">
             Wirerings, Dewan Industrial Estate,Aliyali.
            </p>
          </Col>
          <Col sm={4}>
            <h4 id="connect">Borivali Office</h4>
            <p id="p">
             5th Cross Road, I.C Colony.
            </p>
          </Col>

          <Col sm={3}>
            <h4 id="connect">Jogeshwari Office</h4>

            <p id="p">102, Faizan Apartment, S.V Road.</p>
          </Col>
        </Row>
        <hr  style={{ border: "1px solid #10b7eb" }}   />
       <Row className="my-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.4527968749394!2d72.84874821438792!3d18.999759087131714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf19b5b6b3d3%3A0xb7dbf2c51f3e9a39!2sMetal%20Analysis%20and%20Services%20Private%20Limited!5e0!3m2!1sen!2sin!4v1622807375656!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
