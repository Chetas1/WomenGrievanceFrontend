
import {Row, Col, Container, Card} from "react-bootstrap";
import Chatbot from 'react-chatbot-kit';
import config from '../../chatbot/config';
import ActionProvider from '../../chatbot/ActionProvider';
import MessageParser from '../../chatbot/MessageParser';
import CarouselComponent from "../Carousel/Carousel";

function DefaultBody() {
    return (
        <div className="App">  
        <Container>
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
          </Container>
        </div>
    );
  }
  
  export default DefaultBody;