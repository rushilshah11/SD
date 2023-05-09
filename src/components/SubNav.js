import "./SubNav.css";
import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ServicesModal from "./services.js";
import { TbDental } from "react-icons/tb";
import {GiToothbrush} from "react-icons/gi"
import { RiParentFill } from "react-icons/ri";

function subNav() {
  return (
    <div>
      <section class="services">
        <Container>
          <Row className="services-style">
            <Col style={{ color: "#3c96c0" }}>
              <TbDental
                size={150}
                className="container d-flex justify-content-center"
              />
            </Col>
            <Col xs={8} className="mr-12 grid content-center">
              <h4>Check-Up</h4>
              <p className="mr-12">
                Creating the appearance of natural beauty requires a keen eye
                and attention to small details. Partnering with the best labs
                and NYC’s premier master ceramist has enabled us to transform
                smiles beautifully and naturally for years. Our goal: To be
                undetectable.
              </p>
            </Col>
          </Row>
          <Row className="services-style">
            <Col style={{ color: "#3c96c0" }}>
              <RiParentFill
                size={150}
                className="container d-flex justify-content-center"
              />
            </Col>
            <Col xs={8} className="mr-12 grid content-center">
              <h4>Family</h4>
              <p className="mr-12">
                Creating the appearance of natural beauty requires a keen eye
                and attention to small details. Partnering with the best labs
                and NYC’s premier master ceramist has enabled us to transform
                smiles beautifully and naturally for years. Our goal: To be
                undetectable.
              </p>
            </Col>
          </Row>
          <Row className="services-style">
            <Col style={{ color: "#3c96c0" }}>
              <GiToothbrush
                size={150}
                className="container d-flex justify-content-center"
              />
            </Col>
            <Col xs={8} className="mr-12 grid content-center">
              <h4>Hygiene</h4>
              <p className="mr-12">
                Creating the appearance of natural beauty requires a keen eye
                and attention to small details. Partnering with the best labs
                and NYC’s premier master ceramist has enabled us to transform
                smiles beautifully and naturally for years. Our goal: To be
                undetectable.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="container d-flex justify-content-center">
        <ServicesModal></ServicesModal>
      </div>
    </div>
  );
}

export default subNav;
