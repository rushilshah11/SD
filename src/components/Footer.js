import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
  
  const hoursArr = [
    "Monday - Wednesday: 9:30AM - 6:00PM",
    "Thursday: 10:00AM - 7:00PM",
    "Friday: 10:00AM - 1:00PM",
    "Saturday: By Appointment Only",
    "Sunday: Closed",
  ];
  return (
    <footer className="footerText w-full pb-10">
      <div className="mx-auto w-full container">
        <div className="flex py-10 flex-wrap grid grid-cols-2 grid-flow-col">
          <div>
            <h2 className="mb-6 text-center text-sm font-semibold uppercase">
              Hours
            </h2>
            <ul className="text-center">
              {hoursArr.map((hours_i) => {
                return <li className="-ml-8 mb-4">{hours_i}</li>;
              })}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-center text-sm font-semibold uppercase">
              Location
            </h2>
            <iframe
              className="mx-auto"
              title="IFRAME"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.960470910547!2d-117.8681932848433!3d33.78751893908156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd7a7cf60ce2d%3A0xf5d0edb015e84cfd!2sSunkist%20Dental%20Office%3A%20Dr.%20Grishma%20Shah!5e0!3m2!1sen!2sus!4v1679436874039!5m2!1sen!2sus"
              height="175"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
      <Container className="flex justify-center mb-2">
        <Row>
          <Col>
            <AiOutlineInstagram className="icon" size={30} />
          </Col>
          <Col>
            <AiOutlineLinkedin className="icon" size={30} />
          </Col>
          <Col>
            <AiOutlineInstagram className="icon" size={30} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
