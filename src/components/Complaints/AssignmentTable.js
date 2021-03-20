import React,{ useState } from 'react';
import {Table,Dropdown} from "react-bootstrap";
import ComplaintsService from '../../service/ComplaintsService';
import {NotificationContainer, NotificationManager} from 'react-notifications';

function AssignmentTable(props) {
    

    const resolveComplaint = React.useCallback((complaint) => {
        ComplaintsService.resolveComplaint(complaint).then(response => {
              if(response.status === 200) {
                NotificationManager.info('Info message');
                props.complaintStatus(!props.statusUpdated);
              }
           })
      }, [])

      const transferComplaint = React.useCallback((complaint,assignedTo) => {
        ComplaintsService.transferComplaint(complaint, assignedTo).then(response => {
              if(response.status === 200) {
                props.complaintStatus(!props.statusUpdated);
              }
           })
      }, [])

    function getDays(date1, date2) {
        return  (Math.floor(( Date.parse(date2) - Date.parse(date1) ) / 86400000) + 1); 
    }

    return(
    <Table responsive="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Assigned To</th>
      <th>Since Days</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
      {
          props.timeline.map((message, index) => (
            <tr>
                <td>{index+1}</td>
                <td>{message.AssignedTo}</td>
                <td>{getDays(message.AssignedDate, new Date())}</td>
                <td>{message.Status}</td>
                <td>
                    <Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            Take Action
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {(message.Status == "Resolved" || localStorage.getItem('userId') != message.AssignedTo || message.Status == "Transferred") ? <Dropdown.Item disabled>Resolve</Dropdown.Item>:
                            <Dropdown.Item onClick={()=>{resolveComplaint(message.ComplaintId)}}>Resolve</Dropdown.Item>}
                            {(message.Status == "Resolved" || localStorage.getItem('userId') != message.AssignedTo || message.Status == "Transferred" ) ?
                            <Dropdown.Item disabled>Transfer</Dropdown.Item> :
                            <Dropdown.Item onClick={()=> {transferComplaint(message.ComplaintId,message.AssignedTo)}}>Transfer</Dropdown.Item>}
                        </Dropdown.Menu>
                    </Dropdown>    
                </td>
            </tr>
        ))
    }

  </tbody>
</Table> )

}

export default AssignmentTable;