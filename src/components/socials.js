import "../App.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Socials() {
  
  return (
    <Container className="flex justify-center mb-2">
      <Row>
        <Col>
          <AiOutlineInstagram size={30} />
        </Col>
        <Col>
          <AiOutlineLinkedin size={30} />
        </Col>
        <Col>
          <AiOutlineInstagram size={30} />
        </Col>
      </Row>
    </Container>
  );
}

export default Socials;
