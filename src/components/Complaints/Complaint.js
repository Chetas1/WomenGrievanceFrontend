import React, { useState } from 'react'; 
import {Row, Col, Container, ListGroup, Card, Alert} from "react-bootstrap";
import ComplaintsService from '../../service/ComplaintsService';
  
function Complaint (props){ 

  let [listOfEmailIds, setEmailId] = useState([]);
  let [messages, setMessages] = useState([]);
  let [defaultMessages, setDefaultMessage] = useState([
    "Hello. Welcome to Women Grievance!",
    "Violation against women/girls is a human right violation",
    "What kind of violance do you need help with",
    "Registering complain for Sexual Voilance",
    "Please tell your email Id",
    "Please tell you branch code",
    "Please tell use more about incident",
    "Where and when it happened?",
    "Who witnessed it?"
  ]);

  React.useEffect(() => {
     ComplaintsService.getComplaintsAssignedToUser(localStorage.getItem('userId')).then(response => {
      if(response.status === 200) { 
         setEmailId(response.data);
         if(setEmailId != null)
         {
            ComplaintsService.getComplaintMessages(response.data[0].Complaint).then(response => {
                if(response.status === 200) {
                   setMessages(response.data);
                }
            });
         }
      }
   })
  }, [])


    return (
         
        <Container style={{padding:50}}>
          <Row>
            <Col xs={14} md={3}>
            <ListGroup>
              {
                listOfEmailIds.map((emailId, index) => (
                  <ListGroup.Item>{emailId.RegisteredBy}</ListGroup.Item> 
                ))
              }
            </ListGroup>
            </Col>
            <Col xs={3} md={9}>
              <Card>
                <Card.Body>
                  {
                    messages.map((message, index) => (
                      <>
                          {defaultMessages.includes(message) ?
                          <p style={{background:"grey", color:"white", padding:"10px" }}> {message} </p> :
                          <p style={{textAlign:"right", background:"lightgrey", color:"black", padding:"10px"}}> {message} </p> }
                      </>
                    ))
                  }
                </Card.Body>
              </Card>
            </Col>
          </Row>
          </Container>
    );
} 
  
export default Complaint; 