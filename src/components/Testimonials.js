import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Testimonals.css";
import "../App.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Zuleima Mendoza",
      description:
        "“Best experience ever Dr. Shah is the sweetest dentist! And as a very nervous nervous patient, I honestly never thought in my life I would every have such a great experience having my wisdom teeth pulled out!”",
    },
    {
      name: "Debbie Thompson",
      description:
        "“Everyone is so friendly and gentle. They explain what they are doing and what the plans are for the next move. I do highly recommend Sunkist Dental and Dr. Shah. My experience has been good”",
    },
    {
      name: "Daniel P",
      description: "“She is an excellent dentist. She’s honest and upfront about cost and tells you only what is necessary for your care. I’ve been going to get for years, and would recommend her to many people I know.”",
    },
  ];

  return (
    <Container>
      <Row>
        <Col>
          <Carousel
            pause="hover"
            controls="false"
            variant="dark"
            className="car-pos col-sm"
          >
            {testimonials.map((testimonial) => {
              return (
                <Carousel.Item pause="hover" controls="false" interval={2000}>
                  <div className="container d-flex justify-content-center">
                    <div className="row">
                      <div className="col-12">
                        <Card className="border border-white m-3">
                          <Card.Body className="mx.auto">
                            <Card.Text className="text-center">
                              {testimonial.description}
                            </Card.Text>
                            <Card.Title class="text-center">
                              {testimonial.name}
                            </Card.Title>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Col>

        <Col>
          <Carousel
            pause="hover"
            controls="false"
            variant="dark"
            className="car-pos col-sm"
          >
            {testimonials.map((testimonial) => {
              return (
                <Carousel.Item pause="hover" controls="false" interval={2000}>
                  <div className="container d-flex justify-content-center">
                    <div className="row">
                      <div className="col-12">
                        <Card className="border border-white m-3">
                          <Card.Body className="mx.auto">
                            <Card.Text className="text-center">
                              {testimonial.description}
                            </Card.Text>
                            <Card.Title class="text-center">
                              {testimonial.name}
                            </Card.Title>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Col>

        <Col>
          <Carousel pause='hover' controls="false" variant="dark" className="car-pos col-sm">
            {testimonials.map((testimonial) => {
              return (
                <Carousel.Item pause='hover' controls="false" interval={2000}>
                  <div className="container d-flex justify-content-center">
                    <div className="row">
                      <div className="col-12">
                        <Card className="border border-white m-3">
                          <Card.Body className="mx.auto">
                            <Card.Text className="text-center">
                              {testimonial.description}
                            </Card.Text>
                            <Card.Title class="text-center">
                              {testimonial.name}
                            </Card.Title>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Testimonials;
