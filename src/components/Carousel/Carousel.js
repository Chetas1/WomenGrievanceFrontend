import { Carousel } from "react-bootstrap";
import image2 from "../../Images/Image2.png";
import image3 from "../../Images/Image3.png";

function CarouselComponent() {
    return (
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Women Safety</h3>
      <p>Women safety is the highest priority.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Women Safety</h3>
      <p>Women safety is the highest priority.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Women Safety</h3>
      <p>Women safety is the highest priority.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
  }
  
export default CarouselComponent;