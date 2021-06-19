import React from "react";
import { Navbar, Nav, Image, Container } from "react-bootstrap";
import "../css/Navbar.css";
import logo from "../images/logo.jpg";

function Menubar() {
  return (
    <>
      {/* <Container>
    <Navbar collapseOnSelect expand="lg"  variant="light" className="nav1">
        <Navbar.Brand href="/">
          <Image src={logo} width={160} height={70} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          // style={{ backgroundColor: "white"}}
          className="toggle"
        />
        <Navbar.Collapse id="basic-navbar-nav" className="collapse">
          <Nav className="ml-auto nav-link" id="links">
            <Nav.Link  href="/home" ><span>Home</span></Nav.Link>
            <Nav.Link  href="/about-us" ><span>About</span></Nav.Link>
            <Nav.Link  href="/services" ><span>Services</span></Nav.Link>
            <Nav.Link  href="/clients" ><span>Clients</span></Nav.Link>
            <Nav.Link  href="/approvals"><span>Approvals</span></Nav.Link>
            <Nav.Link  href="/faqs"><span>Faq</span></Nav.Link>
            <Nav.Link  href="/contact-us" ><span>  Contact</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
      </Navbar>
    </Container> */}
      {/* <hr style={{border:"1px solid red"}} /> */}
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/">
          <Image src={logo} width={150} height={55} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto nav1">
            <Nav.Link href="/home" className="nav1">
              <span>Home</span>
            </Nav.Link>
            <Nav.Link href="/about-us">
              <span>About</span>
            </Nav.Link>
            <Nav.Link href="/services">
              <span>Services</span>
            </Nav.Link>
            {/* <Nav.Link href="/clients">
              <span>Clients</span>
            </Nav.Link> */}
            <Nav.Link href="/approvals">
              <span>Approvals</span>
            </Nav.Link>
            {/* <Nav.Link href="/faqs">
              <span>Faq</span>
            </Nav.Link> */}
            <Nav.Link href="/contact-us">
              <span> Contact</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    
    </>
  );
}

export default Menubar;
