import React,{useState} from 'react';
import { Modal, Button,Form } from "react-bootstrap"; 
import UserService from '../../service/UserService';


function TransferComplaint(props) {
    const [users, setUsers] = useState([]);
    const [userId,setUserId] = useState('');


    React.useEffect(() => {
        UserService.getUsers(localStorage.getItem('branchCode')).then(response => {
         if(response.status === 200) { 
            setUsers(response.data);
         }});
    },[])

    function setUser(event) {
        console.log(event);
        setUserId(event.target.value);
    }

    return (
      <>
        <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Transfer To</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Control as="select" custom onChange={(event)=> {setUser(event)}}>
                    <option value={"NA"} >Select User</option> :<></>
                    {
                     users.map((user, index) => (
                        (user != undefined) ?
                            <option key={index} value={user.UserId}>{user.Name}</option> :<></>
                        ))
                    }
                    </Form.Control>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {props.transferComplaint(userId)}}>
            Save Changes
          </Button>
        </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default TransferComplaint;
