import React,{ useState } from 'react';
import {Table,Dropdown} from "react-bootstrap";
import ComplaintsService from '../../service/ComplaintsService';
import TransferComplaint from './TransferComplaint';
import { NotificationManager} from 'react-notifications';

function AssignmentTable(props) {
    const [showModal, setModalVisible] = useState(false);

    const resolveComplaint = React.useCallback((complaint) => {
        ComplaintsService.resolveComplaint(complaint).then(response => {
              if(response.status === 200) {
                 
              }
           });
           props.getData(props.ComplaintId);
      }, [])

      const transferComplaint = React.useCallback((assignedTo) => {
        ComplaintsService.transferComplaint(localStorage.getItem('complaintId'), assignedTo).then(response => {
              if(response.status === 200) {
                
              }
           })
           props.getData(props.ComplaintId);
           setModalVisible(false);
      }, [])

    function getDays(date1, date2) {
        return  (Math.floor(( Date.parse(date2) - Date.parse(date1) ) / 86400000) + 1); 
    }

    return(
      <>
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
                <td>{getDays(message.AssignedDate, (message.Status != "Active")? message.ResolvedDate : new Date())}</td>
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
                            <Dropdown.Item onClick={()=> {setModalVisible(true)}}>Transfer</Dropdown.Item>}
                        </Dropdown.Menu>
                    </Dropdown>    
                </td>
            </tr>
        ))
    }

  </tbody>
</Table> 
<TransferComplaint show={showModal} onHide={() => setModalVisible(false)} transferComplaint={transferComplaint}/>
</>
)}

export default AssignmentTable;