
import Container from "react-bootstrap/Container";
import ModalTest from "./modalTest.js"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation(props) {
  const navArr = [
    {
      title: "Services",
      link: "/services",
    },
    {
      title: "Meet the Doctor",
      link: "/meet_the_doctor",
    },
    {
      title: "Testimonials",
      link: "/testimonials",
    },
    {
      title: "Hours",
      link: "/hours",
    },
    {
      title: "Contact Us",
      link: "/contact_us",
    },
  ];
  return (
    <Navbar expand="lg" className="background-Nav-Footer mb-10">
      <Container fluid>
        <Navbar.Brand href="home">Sunkist Dental</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {navArr.map((nav_i) => {
              return (
                <Nav.Link className="link-dark" href={nav_i.link}>
                  {nav_i.title}
                  {/* <p className="hover:text-sky-700">{nav_i.title}</p> */}
                </Nav.Link>
              );
            })}
          </Nav>
          <ModalTest></ModalTest>
        </Navbar.Collapse>
      </Container>
      {props.children}
    </Navbar>
  );
  
}

export default Navigation;
