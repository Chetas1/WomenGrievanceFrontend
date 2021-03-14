
import {Row, Col, Container, Card} from "react-bootstrap";
import Chatbot from 'react-chatbot-kit';
import config from '../../chatbot/config';
import ActionProvider from '../../chatbot/ActionProvider';
import MessageParser from '../../chatbot/MessageParser';
import CarouselComponent from "../Carousel/Carousel";
import hvpmImage from "../../Images/hvpm.jpg";
import FooterPage from "../Footer/Footer";

function DefaultBody() {
    return (
        <div className="App">  
        <Container>
          <br/><br/>
          <Row>
            <Col xs={14} md={9}>
             <Card>
                 <Card.Body>
                    <CarouselComponent />
                 </Card.Body>
              </Card>
            </Col>
            <Col xs={3} md={1}>
                   <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}/>
            </Col>
          </Row>
          <br/>
          <Row>
          <Col xs={3} md={12}>
            <Card>
              <Card.Img variant="top" src={hvpmImage} />
              <Card.Body>
                <Card.Text>
                Shree Hanuman Vyayam Prasarak Mandal has the glorious heritage of 100 years. It has become iconic symbol of discipline, dedication and result orientation. We, the College of Engineering and Technology, Amravati are proud to be part of this glory. Technical Education, in particular, has become highly demanding in terms of expectations of stake holders.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          </Row>
          <Row>
            <FooterPage />
          </Row>
          </Container>
        </div>
    );
  }
  
  export default DefaultBody;