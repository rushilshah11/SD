import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import doctorPic from "./images/mom+pic.jpeg";

function MeetTheDoctor() {
  return (
    <Container>
      <Row>
        <Col>
          <h4>MEET DR. SHAH</h4>
          <p>
            Dr. Shah is passionate about providing her patients the best service
            possible. Dr. Shah’s impeccable eye for detail, dedication to
            quality, and friendly, carefree persona are of the few qualities
            that set her apart from the rest. She believes it is important for
            her patients to be completely informed about all aspects of the
            procedure beforehand.
          </p>
        </Col>
        <Col className="picHiddenOnMobile">
          <img src={doctorPic} alt="cute pic of doctor"></img>
        </Col>
      </Row>
      <Row>
        <p>
          She also makes a point to establish a connection with her patients by
          getting to know them, so she can often be found laughing alongside
          them. As such, for years, she has treated generations of happy
          families, who hold her to the highest regard. When not at work, she
          spends time with her two children, watches shark tank, or plays the
          piano.
        </p>
      </Row>
    </Container>
  );
}

export default MeetTheDoctor;
