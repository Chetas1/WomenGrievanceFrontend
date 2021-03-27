import React, { useState } from 'react'; 
import {Row, Col, Container, ListGroup, Button} from "react-bootstrap";
import ComplaintsService from '../../service/ComplaintsService';
import AssignmentTable from '../Complaints/AssignmentTable';

function ComplaintTimeline (props){ 

  let [listOfEmailIds, setEmailId] = useState([]);
  let [timelineData, setTimelineData] = useState([]);
  let [statusUpdated, updateComplaintStatus] = useState(false);
  let [complaintId, setComplaintId] = useState('');

  const fetchData = React.useCallback((complaint) => {

    ComplaintsService.getTimelines(complaint.target.value).then(response => {
          if(response.status === 200) {
            localStorage.setItem('complaintId',complaint.target.value);
            setTimelineData(response.data);
            
          }
       })
  }, [])

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
              <center><b>Complaints registered by</b></center>
            </Col>
            <Col xs={14} md={9}>
              <center><b>Timelines</b></center>
            </Col>
          </Row>
          <br/>
         <Row>
            <Col xs={14} md={3}>
            <ListGroup>
              {
                listOfEmailIds.map((emailId, index) => (
                  (emailId != undefined) ?
                  <Button onClick={fetchData} key={emailId.Complaint} value={emailId.Complaint}>{emailId.RegisteredBy}</Button> :<></>
                ))
              }
            </ListGroup>
            </Col>
            <Col xs={14} md={9}>
              <center>
                 <AssignmentTable complaintId={complaintId} timeline={timelineData} complaintStatus={updateComplaintStatus} statusUpdated={statusUpdated}/>
              </center>
            </Col>
          </Row>
        </Container>
    );
} 
  
export default ComplaintTimeline; 