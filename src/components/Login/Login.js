import React,{useState} from 'react';
import { Modal, Button, Form } from "react-bootstrap"; 
import LoginService from '../../service/LoginService';

function LoginModal(props) {

  let [userId, setUserId] = useState('');
  let [password, setPassword] = useState('');

  function setValueOfUserId(event) {
    const { name, value } = event.target;
    setUserId(value);
  }

  function setValueOfUserPassword(event) {
    const { name, value } = event.target;
    setPassword(value);
  }

  const fetchData = React.useCallback(() => {
    LoginService.checkIfUserIsValid(userId,password).then(response => {
          if(response.status === 200) { 
            if(response.data)
            {

            }
            else
            {

            }
          }
       })
  }, [])

  function submitForm(event) {
    event.preventDefault();
    console.log(userId);
    fetchData();
  }

  React.useEffect(() => {
    fetchData()
  }, [fetchData])


    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Login to Women Grievance
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form onSubmit={submitForm}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={setValueOfUserId}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={setValueOfUserPassword}/>
                <Form.Text className="text-muted">
                    Your password will always be encrypted
                </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit" >
                Log In
            </Button>
        </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default LoginModal;

  // LoginService.checkIfUserIsValid(userId,password).then(response => {
  // if(response.status === 200) { let valid = response.data.valid }
  // })