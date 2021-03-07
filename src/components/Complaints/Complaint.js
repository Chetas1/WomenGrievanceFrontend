import React, { useState } from 'react'; 
import {Row, Col, Container, ListGroup} from "react-bootstrap";
import ComplaintsService from '../../service/ComplaintsService';
  
function Complaint (props){ 

  let [listOfEmailIds, setEmailId] = useState([]);

  React.useEffect(() => {
     ComplaintsService.getComplaintsAssignedToUser(localStorage.getItem('userId')).then(response => {
      if(response.status === 200) { 
         setEmailId(response.data);
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
                  <ListGroup.Item>{emailId}</ListGroup.Item> 
                ))
              }
            </ListGroup>
            </Col>
            <Col xs={3} md={9}>
                  World
            </Col>
          </Row>
          </Container>
    );
} 
  
export default Complaint; 