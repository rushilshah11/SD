import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import "./Testimonals.css";
import "../App.css";

function IndividualIntervalsExample() {
  return (
    <Carousel variant="dark" className="car-pos">
      <Carousel.Item interval={5000}>
        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="col-12">
              <Card className="border border-white m-5" bg="info">
                <Card.Body className="mx.auto">
                  <Card.Text className="text-center">
                    “Best experience ever Dr. Shah is the sweetest the most
                    genuine Dentist I have ever met! In addition to my visit My
                    wisdom teeth were bothering me and had to have them removed.
                    And as a very nervous nervous patient! I honestly never
                    thought in my life I would every have such a great
                    experience having my wisdom teeth pulled out! Dr. Kwieder
                    who is teamed up with Dr. Shah did an amazing job pulling my
                    wisdom teeth out! Believe it or not I was able to work right
                    after my teeth were pulled. That’s how well I was taken care
                    off. Dr. Kwieder and Dr. Shah hands down.”
                  </Card.Text>
                  <Card.Title class="text-center"> Zuleima Mendoza</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <div class="container d-flex justify-content-center">
          <div class="row">
            <div class="col-12">
              <Card>
                <Card.Body class="mx.auto">
                  <Card.Text className="text-center">
                    “Everyone is so friendly and gentle. They explain what there
                    doing and what the plans arefor there next move. I do highly
                    recommend Sunkist Dental. My experience with then has been
                    good”
                  </Card.Text>
                  <Card.Title class="text-center">Debbie Thompson</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <div class="container d-flex justify-content-center">
          <div class="row">
            <div class="col-12">
              <Card>
                <Card.Body class="mx.auto">
                  <Card.Text className="text-center">
                    “She is an excellent dentist. She’s honest and upfront about
                    cost and tells you only what is necessary for your care.
                    I’ve been going to get for years.”
                  </Card.Text>
                  <Card.Title class="text-center">Daniel P</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
