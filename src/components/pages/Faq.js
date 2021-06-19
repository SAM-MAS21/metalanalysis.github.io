import React from "react";
import { Accordion, Card, Container,Breadcrumb} from "react-bootstrap";
import "../css/Faq.css";


function Faq() {
  return (
    <>
     
     <Breadcrumb>
        <Breadcrumb.Item  href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Frequently Asked Questions</Breadcrumb.Item>
      </Breadcrumb>

      <Container className="my-5">
        <h3 className="text-center" style={{ color: "#10b7eb" }}>
          {" "}
          Frequently Asked Questions
        </h3>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Card>
            <Accordion.Toggle className="toggle1" as={Card.Header} eventKey="0">
              1. What is the difference between a mechanical and physical
              properties?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="para1">
                Physical properties can be observed or measured without changing
                the composition of matter. Physical properties are used to
                observe and describe matter. Physical properties include: Heat
                and electrical conductivity, Magnetic susceptibility,
                Reflectivity, density, melting point, boiling point, solubility,
                Reflectivity. Mechanical properties indicate the elastic or
                inelastic behavior of a material under pressure (force), such as
                bending, brittleness, elongation, hardness, and tensile
                strength.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle className="toggle1" as={Card.Header} eventKey="1">
              2. What are the difference between hot rolled and cold rolled
              steel?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="para1">
                <b style={{ color: "#10b7eb" }}>Hot Rolled:-</b> Hot rolling is
                a mill process which involves rolling the steel at a high
                temperature (typically at a temperature over 1700° F), which is
                above the steel’s recrystallization temperature. When steel is
                above the recrystallization temperature, it can be shaped and
                formed easily, and the steel can be made in much larger sizes.
                The reheating of the steel is not required (as it is with cold
                rolled).
                <br />
                <br />
                <b style={{ color: "#10b7eb" }}>Uses:</b> Hot rolled products
                like hot rolled steel bars are used in the welding and
                construction trades to make railroad tracks and I-beams.
                <br />
                <br />
                <b style={{ color: "#10b7eb" }}>Cold Rolled:-</b> Cold rolled
                steel is essentially hot rolled steel that has had further
                processing. The steel is processed further in cold reduction
                mills, where the material is cooled (at room temperature)
                followed by annealing and/or tempers rolling. This process will
                produce steel with closer dimensional tolerances and a wider
                range of surface finishes. When referring to bar products, the
                term used is “cold finishing”, which usually consists of cold
                drawing and/or turning, grinding and polishing. This process
                results in higher yield points and has four main advantages:
                Cold drawing increases the yield and tensile strengths, often
                eliminating further costly thermal treatments.Cold finished bars
                are typically harder to work with than hot rolled due to the
                increased carbon content. However, this cannot be said about
                cold rolled sheet and hot rolled sheet. With these two products,
                the cold rolled product has low carbon content and it is
                typically annealed, making it softer than hot rolled sheet.
                <br />
                <b style={{ color: "#10b7eb" }}>Uses:</b>Any project where
                tolerances, surface condition, concentricity, and straightness
                are the major factors.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle className="toggle1" as={Card.Header} eventKey="3">
              3. What causes hardness in steel? How heat Treatment alters
              properties of steel?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body className="para1">
                The shape and distribution of the carbides in the iron
                determines the hardness of the steel. Carbides can be dissolved
                in of the basis of the heat treatment of steel. If steel is
                heated above the critical temperature to dissolve all the
                carbides and then cooling through the cooling range will produce
                the desired size and distribution of carbides in the ferrite.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle className="toggle1" as={Card.Header} eventKey="4">
              4. What are the effect of carbon on the properties of steel?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body className="para1">
                In general , an increase in carbon content produces higher
                ultimate strength and hardness but lower ductility and
                Toughness. In low alloy temperature applications, The content is
                usally restricted to a maximum of about 0.15% in order to assure
                welding, expanding and bending operations. To minimize the
                intergranular corrosion caused by carbide precipitation, the
                carbon content in austenitic alloys is limited in commercial
                specification to a maximum of 0.08% or even less Ie 0.03%{" "}
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle className="toggle1" as={Card.Header} eventKey="5">
              5. What is patenting?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body className="para1">
                A heat treatment of steel whereby, which is a lamellar
                microstructure of ferrite and cementite,is produced.
                Patentingusually includes the following steps: austenitizing by
                heating to 870°-950°C, isothermal transformation of the super
                cooled austenite in molten salt or lead at 450°-550°C, and
                cooling with water or in air. Several new types of patenting
                have been developed for example,stepwise patenting and rimming
                layer patenting. Patenting provides high strength and ductility
                Of products (usually wire), which are cold-worked from patented
                billets.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle className="toggle1" as={Card.Header} eventKey="6">
              6. What is PMI Testing of metals?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="6">
              <Card.Body className="para1">
                PMI stands for positive material identification. PMI is
                qualitative analysis. PMI is carried out using XRF which does
                not give C, S, P, Si The concentration of values reported are
                for reference only (it is Nominal Alloy verification).
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle className="toggle1" as={Card.Header} eventKey="7">
              7. What is the difference between WPS, WPQR & WPQ?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="7">
              <Card.Body className="para1">
                <b style={{ color: "#10b7eb" }}>
                  Welding Procedure Specification(WPS)
                </b>
                <br />
                The Welding Procedure Specification is a required document for
                all code welding. The WPS outlines all of the parameters
                required to perform your welding operation.In short the WPS is
                the recipe for your welding operation. It describes the welding
                process or processes used, the base materials used, the joint
                design and geometry, gases and flow rates, welding position and
                includes all of the process conditions and variables. Each code
                has a recommended format.
                <br />
                <br />
                <b style={{ color: "#10b7eb" }}>
                  Welding Procedure Qualification Record(WPQR)
                </b>
                <br />
                The Welding Procedure Qualification Record is the document that
                qualifies the Welding Procedure Specification. In order to
                qualify your WPS, a procedure qualification plate is welded the
                code requirements. The actual test parameters are recorded at
                the time of welding to ensure the WPS was being followed.
                Generally any supporting documentation, such as material
                specifications, electrode specifications and shielding gas
                specifications, are included as part of the WPQR. All required
                testing, both non-destructive and destructive, is recorded as
                well. These tests typically include X-Ray examinations,
                ultrasonic examinations, tensile testing, bend testing and when
                required impact testing. The WPQR combines all of the
                information of the WPS and adds the test results to provide a
                complete document that certifies the welding specification. This
                document is also required by all codes unless you are qualifying
                under American Welding Society (AWS) specifications. Under
                certain conditions the WPS may be considered prequalified in
                which the WPQR is not required.
                <br />
                <br />
                <b style={{ color: "#10b7eb" }}>
                  Welder Performance Qualification(WPQ)
                </b>
                <br /> This document is required by all codes for all welders.
                It details and summarizes the following information: Indicates
                the WPS referenced during the qualification test Identifies the
                welder by name and/or clock number Lists what the essential
                parameters were during this test Reports the results of the
                required qualification tests Specifies qualified limits for
                welder For most codes there is a time limit associated with the
                welder qualification test.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle className="toggle1" as={Card.Header} eventKey="8">
              8. What is the difference between Macrostructure and
              Microstructure?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="8">
              <Card.Body className="para1">
                (a) Macrostructure :- The gross structure of a material or
                tissue as visible to the unaided eye or at very low levels of
                magnification. The gross structure of a pure metal or alloy, as
                revealed by magnifications of 10X or less. (b) The fine
                structure of a material or tissue as revealed by microscopy. The
                fine structure of a pure metal or alloy, as revealed by
                magnifications of 25X or greater.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle className="toggle1" as={Card.Header} eventKey="9">
              9. What does the "L" designation in stainless steel e.g. 304L,
              316L mean?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="9">
              <Card.Body className="para1">
                The use of the letter L after the grade number, i.e., 304L,
                316Lmeans that the carbon content is restricted to 0.03%max
                (normal levels are 0.08% max). The lower level of carbon helps
                to prevent the chromium from being depleted (by forming chrome
                carbides ) and that gives stainless its corrosion resistance.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    </>
  );
}

export default Faq;
