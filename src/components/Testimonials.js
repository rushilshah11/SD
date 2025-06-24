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
      description:
        "“She is an excellent dentist. She’s honest and upfront about cost and tells you only what is necessary for your care. I’ve been going to get for years, and would recommend her to many people I know.”",
    },
  ];

  const testimonials2 = [
    {
      name: "Asheel P.",
      description:
        "“I can't thank this dental practice enough for their prompt and professional response. The entire staff was calm, efficient, and incredibly reassuring during a stressful situation.”",
    },
    {
      name: "Shivam V.",
      description:
        "“Dr. Shah was honestly really helpful. She was really nice and explained what was going on thoroughly. Would definitely recommend to anyone.”",
    },
    {
      name: "Nairobi H.",
      description:
        "“Love that this dental office is down the street from my house but especially love their staff. Rosa is so sweet and always helpful.”",
    },
  ];

  const testimonials3 = [
    {
      name: "Julian R.",
      description:
        "“I hadn't been to the dentist in years, so frankly I was pretty nervous. The team made me feel really welcome and throughout the cleaning process they checked in on me to make sure I was good. Very clean place.”",
    },
    {
      name: "Bev P.",
      description:
        "“This dentist and staff are great. Conservative, compassionate and professional. Each procedure is thoroughly explained and there is no pressure for unnecessary procedures.”",
    },
    {
      name: "Liz D.",
      description:
        "“Dr. Shah is great! She is patient and listens to her clients to make sure they feel comfortable. The setting in the office is a small family practice.”",
    },
  ];

  return (
    <Container>
      <Row>
        <Col>
          <Carousel
            pause="hover"
            controls={false}
            variant="dark"
            className="hvr-float car-pos col-sm"
            indicators={false}
          >
            {testimonials.map((testimonial) => {
              return (
                <Carousel.Item pause="hover" controls="false" interval={2000}>
                  <div className="hvr-fade container d-flex justify-content-center">
                    <div className="row">
                      <div className="col-12">
                        <Card className="hvr-fade border-white m-3">
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
            controls={false}
            variant="dark"
            className="hvr-float car-pos col-sm"
            indicators={false}
          >
            {testimonials2.map((testimonial) => {
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
            controls={false}
            variant="dark"
            className="hvr-float car-pos col-sm"
            indicators={false}
          >
            {testimonials3.map((testimonial) => {
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
      </Row>
    </Container>
  );
}

export default Testimonials;
