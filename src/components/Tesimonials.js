import Carousel from "react-bootstrap/Carousel";

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-30 justify-center"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngElsE90FhssTHnGV-9ZdMFkR6hsNNsKwzPAUsHpJ4w&s"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-30 justify-center"
          src=""
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-30 justify-center"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngElsE90FhssTHnGV-9ZdMFkR6hsNNsKwzPAUsHpJ4w&s"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
