import React from "react";
import "../css/Home.css";
import { Col, Jumbotron, Row, Image, Button, Container, Carousel } from "react-bootstrap";
import image1 from '../images/about-us.jpg';
import styled from "styled-components";
import { HiLightBulb } from "react-icons/hi";
import { GiCutDiamond, GiMagnifyingGlass } from "react-icons/gi";
import { GrServices } from "react-icons/gr";
import { FcServices } from "react-icons/fc";
import { FaServicestack } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bark from "../images/slider-logos/bark.svg";
import bmc from "../images/slider-logos/bmc.png";
import best from "../images/slider-logos/best.png";
import essar from "../images/slider-logos/essar.jpg";
import deepak from "../images/slider-logos/deepak.png";
import Rites from "../images/slider-logos/Rites.jpg";
import BP3 from "../images/slider-logos/BP3.png";
import hpcl from "../images/slider-logos/hpcl.png";
import godrej from "../images/slider-logos/godrej1.png";
import tata from "../images/slider-logos/tata.png";
import mahindra from "../images/slider-logos/mahindra.png";
import lt from "../images/slider-logos/l&t.jpg";
import irclass from "../images/slider-logos/irclass.png";
import mah from "../images/slider-logos/mah.png";
import irlogo from "../images/slider-logos/irlogo.png";
import Carousel1 from 'react-elastic-carousel';
import HP from "../images/slider-logos/HP.jpg"



function Home() {

 
  return (
    <>
      <div className="main"></div>


      {/* Welcome To MAS */}
      <Container>
        <h1 className="text-center mt-5 mb-3" style={{ fontWeight: "700" }}>WELCOME TO <span style={{ color: "#10b7eb",fontWeight:"700" }}>MAS!</span></h1>
        <p className="mb-5" style={{ fontWeight: "500" }}>
          Metal Analysis and Services Private Limited (MAS) based in Mumbai, is
          a reputed, leading independent laboratory specialize in metal testing.
          For over 18 years, MAS has provided clients with Technical Services to
          meet a wide range of testing requirements .
        </p>
        <Row>
          <Col></Col>
        </Row>
      </Container>
      
      {/* middle containt */}
    
      
      
      {/* Services */}




      <Container>
        <Row style={{ textAlign: "center" }}>
          <Col sm={4}>
            <HiLightBulb size={72} color={"#10b7eb"} />
            <h4 className="mt-2 mb-2 cr">Creativity</h4>
            <p>
              Complex jobs. Difficult installations. Artistic beauty. Creativity
              is found across our wide breadth of work.
            </p>
          </Col>
          <Col sm={4}>
            <GiCutDiamond size={72} color={"#10b7eb"} />
            <h4 className="mt-2 mb-2 cr">Reliability</h4>
            <p>
              Our local team is trusted to finish every job according to plan.
              Even when the plans have to change mid-stream.
            </p>
          </Col>
          <Col sm={4}>
            <FaServicestack size={72} color={"#10b7eb"} />
            <h4 className="mt-2 mb-2 cr">Service</h4>
            <p>
              From project initiation until final signoff, you’ll have
              dedicated, real people that make service our top priority
            </p>
          </Col>
        </Row>
        <Row className="text-center my-5">
          <Col sm={4}>
            <GiMagnifyingGlass size={72} color={"#10b7eb"} />
            <h4 className="mt-2 mb-2 cr">Precision</h4>
            <p>
              In every cut and angle, materials match project specs to ensure
              adherence timelines and sequencing.
            </p>
          </Col>
          <Col sm={4}>
            <FaHistory size={62} color={"#10b7eb"} />
            <h4 className="mt-3 mb-2 cr">History</h4>
            <p>
              For more than 100 years, we have proudly served Southern
              California, with a focus on San Diego County.
            </p>
          </Col>
          <Col sm={4}>
            <IoIosGlobe size={72} color={"#10b7eb"} />
            <h4 className="mt-2 mb-2 cr">Breadth</h4>
            <p>
              Working with architectural sheet metal, metal cladding, composite
              panels, Trespa, copper, bronze and more.
            </p>
          </Col>
        </Row>
      </Container>

      {/* counter up */}
      <div className="counter-up my-5">
        <div className="content">
          <div className="box">
            <div className="icon"><i className="fa fa-history"></i></div>
            <div className="counter">1997</div>
            <div className="text">Year Established</div>
          </div>
          <div className="box">
            <div className="icon"><i className="fas fa-tasks"></i></div>
            <div className="counter">508</div>
            <div className="text">Projects Completed</div>
          </div>
          <div className="box">
            <div className="icon"><i className="fa fa-users"></i></div>
            <div className="counter">897</div>
            <div className="text">Clients Served</div>
          </div>
          <div className="box">
            <div className="icon"><i className="fa fa-cogs"></i></div>
            <div className="counter">102</div>
            <div className="text">Services Offered</div>
          </div>
        </div>
      </div>







{/* Auto Slider */}
<h1 className="text-center" style={{fontWeight:"700"}}>OUR <span  style={{ color: "#10b7eb",fontWeight:"700" }}>CLIENTS</span></h1>
<div className="sliderlogo bodyS">

  <div className="slide-track">
    <div className="slideS">
      <img id="imgS" src={BP3} />
    </div>
    <div className="slideS">
      <img id="imgS" src={best} />
    </div>
    <div className="slideS">
      <img id="imgS" src={bark} />
    </div>
    <div className="slideS">
      <img id="imgS" src={bmc} />
    </div>
    <div className="slideS">
      <img id="imgS" src={HP} />
    </div>
    <div className="slideS">
      <img id="imgS" src={irlogo} />
    </div>

    {/* Same Slide */}
    <div className="slideS">
      <img id="imgS" src={tata} />
    </div>
    <div className="slideS">
      <img id="imgS" src={godrej} />
    </div>
    <div className="slideS">
      <img id="imgS" src={deepak} />
    </div>
    <div className="slideS">
      <img id="imgS" src={essar} />
    </div>
    <div className="slideS">
      <img id="imgS" src={lt} />
    </div>
    <div className="slideS">
      <img id="imgS" src={mah} />
    </div>
  </div>
</div>




  {/* side-icon */}

  <div className="icon-bar">
        <a id="ai" href="#" className="facebook" target="_Suraj">
          <i className="fab fa-facebook-square"></i>
        </a>

        <a id="ai" href="#" className="telegram" target="_thapa">
          <i className="fab fa-telegram-plane"></i>
        </a>

        <a
          id="ai"
          href="https://www.instagram.com/thapatechnical/"
          className="instagram"
          target="_thapa"
        >
          <i className="fab fa-instagram"></i>
        </a>

        <a id="ai" href="#" className="linkedin" target="_thapa">
          <i className="fab fa-linkedin"></i>
        </a>

        <a
          id="ai"
          href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
          className="youtube"
          target="_thapa"
        >
          <i className="fab fa-youtube-square"></i>
        </a>
      </div>


    </>
  );
}

export default Home;
