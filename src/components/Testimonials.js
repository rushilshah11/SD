import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
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
        "“Everyone is so friendly and gentle. They explain what they are doing and what the plans are for the next move. I do highly recommend Sunkist Dental and Dr. Shah. My experience with them has been good”",
    },
    {
      name: "Daniel P",
      description: "“She is an excellent dentist. She’s honest and upfront about cost and tells you only what is necessary for your care. I’ve been going to get for years, and would recommend her to many people I know.”",
    },
  ];

  return (
    <Carousel variant="dark" className="car-pos">
      {testimonials.map((testimonial) => {
        return (
          <Carousel.Item interval={5000}>
            <div className="container d-flex justify-content-center">
              <div className="row">
                <div className="col-12">
                  <Card className="border border-white m-5" bg="info">
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
  );
}

export default Testimonials;
