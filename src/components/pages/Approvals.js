import React from 'react';
import { Container,Breadcrumb,Row,Col,Image,Card,Button, CardDeck,CardGroup} from "react-bootstrap";
import "../css/Approval.css";
import aa from '../images/Approval-Logos/1.png';
import ab from '../images/Approval-Logos/2.png';
import ac from '../images/Approval-Logos/3.png';
import ad from '../images/Approval-Logos/4.png';
import ae from '../images/Approval-Logos/5.png';
import af from '../images/Approval-Logos/6.png';
import ag from '../images/Approval-Logos/8.png';
import ah from '../images/Approval-Logos/9.png';
import ai from '../images/Approval-Logos/10.png';
import aj from '../images/Approval-Logos/24.png';
import ak from '../images/Approval-Logos/12.png';
import al from '../images/Approval-Logos/13.png';
import am from '../images/Approval-Logos/14.jpg';
import an from '../images/Approval-Logos/15.png';
import ao from '../images/Approval-Logos/16.png';
import ap from '../images/Approval-Logos/17.png';
import aq from '../images/Approval-Logos/18.png';
import ar from '../images/Approval-Logos/19.png';
import ash from '../images/Approval-Logos/20.png';
import at from '../images/Approval-Logos/21.png';
import au from '../images/Approval-Logos/22.png';
import av from '../images/Approval-Logos/23.png';


function Approval(){

  
 
    return (
      <>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Approvals</Breadcrumb.Item>
        </Breadcrumb>

              {/* Second Card */}

        <Container >
        <h3 style={{ textAlign: "center", color: "#10b7eb" }} className="my-5">
            Approved By: TPI Agencies / Organisations
          </h3>
        {/* Row 1 Card */}
          <Row className="mx-2">
            <Col sm={2} md={2} className="img1c ">
              <Image src={aa} style={{width:"100%",height:"100%"}} />
              {/* <p>Title one</p> */}
             </Col>
            <Col sm={2} md={2} className="img1c">
              <Image src={ab} style={{width:"100%",height:"100%"}} />
             
            </Col>
            <Col sm={2} md={2} className="img1c">
              <Image src={ac} style={{width:"100%",height:"100%"}} />
              
            </Col>
            <Col sm={2} md={2} className="img1c">
              <Image src={ad} style={{width:"100%",height:"100%"}} />
              
            </Col>
            <Col sm={2} md={2} className="img1c">
              <Image src={ae} style={{width:"100%",height:"100%"}} />
             
            </Col>
          </Row>

{/* Row 2 Card */}
          <Row className="gy-2 mx-2">
           
            <Col sm={2} md={2} className="img1c">
              <Image src={af} style={{width:"100%",height:"100%"}} />
              
            </Col>
            <Col sm={2} md={2} className="img1c">
              <Image src={ag} style={{width:"100%",height:"100%"}} />
              
            </Col>
            <Col sm={2} md={2} className="img1c">
              <Image src={ah} style={{width:"100%",height:"100%"}} />
              
            </Col>
            <Col sm={2} md={2} className="img1c">
              <Image src={ai} style={{width:"100%",height:"100%"}} />
              
            </Col>
            <Col sm={2} md={2} className="img1c">
              <Image src={aj} style={{width:"100%",height:"100%"}} />
              
            </Col>
          </Row>

{/* Row 3 Card */}
          <Row className="gy-2 mx-2">
          <Col sm={2} md={2} className="img1c">
              <Image src={ak} style={{width:"100%",height:"100%"}} />
              
            </Col>
            <Col sm={2} md={2} className="img1c">
              <Image src={al} style={{width:"100%",height:"100%"}} />
              
            </Col>
            <Col sm={2} md={2} className="img1c">
              <Image src={am} style={{width:"100%",height:"100%"}} />
              
            </Col>
            <Col sm={2} md={2} className="img1c">
              <Image src={an} style={{width:"100%",height:"100%"}} />
              
            </Col>
            <Col sm={2} md={2} className="img1c">
              <Image src={ao} style={{width:"100%",height:"100%"}} />
              
            </Col>
          </Row>

{/* Row 4 Card */}

          <Row className="gy-2 mx-2">
          <Col sm={2} md={2} className="img1c">
              <Image src={ap} style={{width:"100%",height:"100%"}} />
              
            </Col>
            <Col sm={2} md={2} className="img1c">
              <Image src={aq} style={{width:"100%",height:"100%"}} />
              
            </Col>
            <Col sm={2} md={2} className="img1c">
              <Image src={ar} style={{width:"100%",height:"100%"}} />
              
            </Col>
            <Col sm={2} md={2} className="img1c">
              <Image src={ash} style={{width:"100%",height:"100%"}} />
              
            </Col>
            <Col sm={2} md={2} className="img1c">
              <Image src={at} style={{width:"100%",height:"100%"}} />
              
            </Col>
          </Row>

{/* Row 5 Card */}

          <Row className="gy-2 mx-2">
            <Col sm={2} md={2} className="img1c">
              <Image src={au} style={{width:"100%",height:"100%"}} />
             
            </Col>
            <Col sm={2} md={2} className="img1c">
              <Image src={av} style={{width:"100%",height:"100%"}} />
             
            </Col>
           
          </Row>
        </Container>
      </>
    );
}

export default Approval;














  {/* <Container className="my-5">
        
          <table className="mt-4 crigle" hover>
            <thead style={{ color: "#10b7eb" }}>
              <tr>
                <th id="serial1">Sr. No.</th>
                <th>TPI Agencies / Organisations</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td id="serial1">1</td>
                <td>Nuclear Power Corporation of India Ltd. (NPCIL)</td>
              </tr>
              <tr>
                <td id="serial1">2</td>
                <td>Engineers India Ltd. (EIL)</td>
              </tr>
              <tr>
                <td id="serial1">3</td>
                <td>
                  American Bureau of Shipping (Marine / Industrial Verification)
                </td>
              </tr>
              <tr>
                <td id="serial1">4</td>
                <td>Bhabha Atomic Research Centre (BARC)</td>
              </tr>
              <tr>
                <td id="serial1">5</td>
                <td>Bureau Veritas (Marine / Industrial)</td>
              </tr>
              <tr>
                <td id="serial1">6</td>
                <td>Projects & Development India Ltd. (PDIL)</td>
              </tr>
              <tr>
                <td id="serial1">7</td>
                <td>
                  Director General of Quality Assurance War Ship Est. (DGQA)
                </td>
              </tr>
              <tr>
                <td id="serial1">8</td>
                <td>Indian Boiler & Regulation (IBR)</td>
              </tr>
              <tr>
                <td id="serial1">9</td>
                <td>Indian Register of Shipping, IRS (Marine / Industrial)</td>
              </tr>
              <tr>
                <td id="serial1">10</td>
                <td>Larsen & Toubro Ltd. (L&T)</td>
              </tr>
              <tr>
                <td id="serial1">11</td>
                <td>Lloyds Register of Shipping (Marine / Industrial)</td>
              </tr>
              <tr>
                <td id="serial1">12</td>
                <td>
                  Rail India Technical & Economic Services (RITES)/Central
                  Railway.
                </td>
              </tr>
              <tr>
                <td id="serial1">13</td>
                <td>Bharat Heavy Electricals Limited (BHEL)</td>
              </tr>
              <tr>
                <td id="serial1">14</td>
                <td>Societe Generale de Surveillance (SGS)</td>
              </tr>
              <tr>
                <td id="serial1">15</td>
                <td>DNV - GL (Marine / Industrial)</td>
              </tr>
              <tr>
                <td id="serial1">16</td>
                <td>Godrej & Boyce</td>
              </tr>
              <tr>
                <td id="serial1">17</td>
                <td>Nippon Kaiji Kyokai.</td>
              </tr>
              <tr>
                <td id="serial1">18</td>
                <td>Tata projects Ltd.</td>
              </tr>
              <tr>
                <td id="serial1">19</td>
                <td>Toyo Engineers India Ltd.</td>
              </tr>
              <tr>
                <td id="serial1">20</td>
                <td>TUV Inida (p) Ltd.</td>
              </tr>
              <tr>
                <td id="serial1">21</td>
                <td>Velosi Certification Services (I)Pvt.Ltd. (Velosi).</td>
              </tr>
              <tr>
                <td id="serial1">22</td>
                <td>
                  Indian Space Research Organisation, LPSC, Mahendragiri.(ISRO).
                </td>
              </tr>
              <tr>
                <td id="serial1">23</td>
                <td>Chempro Expert ise Pvt.Ltd.</td>
              </tr>
              <tr>
                <td id="serial1">24</td>
                <td>Intertek India Pvt.Ltd.</td>
              </tr>{" "}
            </tbody>
          </table>
        </Container> */}

