import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "./components/Footer"
import Testimonial from "./components/Testimonials"
import BookAppointment from "./components/BookAppointment";
import MeetTheDoctor from "./components/MeetTheDoctor";
import ContactForm from "./components/contactForm";
import SubNav from "./components/SubNav";


function App() {
  return (
    <div>
      <BookAppointment></BookAppointment>
      <SubNav></SubNav>
      <Testimonial></Testimonial>
      <Container>
        <Row>
          <Col sm={8}>
            <ContactForm></ContactForm>
          </Col>
          <Col sm={4}>
            <MeetTheDoctor></MeetTheDoctor>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
}

export default App;


