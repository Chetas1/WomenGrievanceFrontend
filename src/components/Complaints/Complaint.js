import React, { useState } from 'react'; 
import {Row, Col, Container, ListGroup, Card, Button} from "react-bootstrap";
import ComplaintsService from '../../service/ComplaintsService';
  
function Complaint (props){ 

  let [listOfEmailIds, setEmailId] = useState([]);
  let [messages, setMessages] = useState([]);
  let [defaultMessages, setDefaultMessage] = useState([
    "Hello. Welcome to Women Grievance!",
    "Violation against women/girls is a human right violation",
    "What kind of violance do you need help with",
    "Please tell your email Id",
    "Please tell you branch code",
    "Please tell use more about incident",
    "Where and when it happened?",
    "Who witnessed it?",
    "Do you want to register your complaint?"
  ]);

  const fetchData = React.useCallback((complaint) => {
    ComplaintsService.getComplaintMessages(complaint.target.value).then(response => {
          if(response.status === 200) { 
            setMessages(response.data.Messages);
            localStorage.setItem('userEmail',response.data.RegisteredBy);
          }
       })
  }, [])

  React.useEffect(() => {
     ComplaintsService.getComplaintsAssignedToUser(localStorage.getItem('userId')).then(response => {
      if(response.status === 200) { 
         setEmailId(response.data);
         if(setEmailId != null)
         {
            localStorage.setItem('userEmail',response.data[0].RegisteredBy);
            ComplaintsService.getComplaintMessages(response.data[0].Complaint).then(response => {
                if(response.status === 200) {
                   setMessages(response.data.Messages);
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
              <center><b>Complaints registered by</b></center>
            </Col>
            <Col xs={14} md={9}>
              <center><b>Messages History</b></center>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs={14} md={3}>
            <ListGroup>
              {
                listOfEmailIds.map((emailId, index) => (
                  <Button onClick={fetchData} value={emailId.Complaint}>{emailId.RegisteredBy}</Button> 
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
          <Row>
            <Col xs={14} md={3}>
                <Button onClick={() => window.location.assign(`mailto:abmarathe@hvpm.com?cc=${localStorage.getItem('userEmail')},anjaliraut@hvpm.com&subject=Resolving%20Complaint`) }>Resolve Complaint</Button>
            </Col>
          </Row>
          </Container>
    );
} 
  
export default Complaint; 