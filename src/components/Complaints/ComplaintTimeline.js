import React from 'react'; 
import {Row, Col, Container} from "react-bootstrap";
import {Chart} from 'react-google-charts';
  
function Complaint (props){ 


    return (         
        <Container style={{padding:50}}>  
         <Row>
            <Col xs={14} md={12}>
              <center>
            <Chart width={'800px'} height={'300px'} chartType="Timeline" loader={<div>Loading Chart</div>}
              data={[
              [
                { type: 'string', id: 'President' },
                { type: 'date', id: 'Start' },
                { type: 'date', id: 'End' },
              ],
              ['Washington', new Date(1789, 3, 30), new Date(1797, 2, 4)],
              ['Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
              ['Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4)],
              ]}
              options={{
              showRowNumber: true, }}
              rootProps={{ 'data-testid': '1' }} />
              </center>
            </Col>
          </Row>
        </Container>
    );
} 
  
export default Complaint; 