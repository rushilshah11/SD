import Container from "react-bootstrap/Container";
import "../App.css";
import Navbar from "react-bootstrap/Navbar";

function Navigation(props) {
  
  return (
    <div expand="lg" className="background-Nav-Footer mb-10">
      <Container fluid>
        <h4 className=" text-center navbartext">
          Dr. Grishma Shah
        </h4>
      </Container>
    </div>
  );
}

export default Navigation;
