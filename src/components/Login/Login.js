import React,{useState} from 'react';
import { Modal, Button, Form } from "react-bootstrap"; 
import LoginService from '../../service/LoginService';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function LoginModal(props) {

  const history = useHistory();
  let [showError, setValidFlag] = useState(false);
  let [userId, setUserId] = useState('');
  let [password, setPassword] = useState('');
  const userNameState = useSelector((state) => state.userName);
  const passwordState = useSelector((state) => state.password);
  const dispatch = useDispatch();

  function setValueOfUserId(event) {
    const { name, value } = event.target;
    setUserId(value);
    if(value != '')
    {
      console.log(value);
      dispatch({type : 'SET_USERNAME', payload : value})
    }
  }

  function setValueOfUserPassword(event) {
    const { name, value } = event.target;
    setPassword(value);
    if(value != '')
    {
      console.log(value);
      dispatch({type : 'SET_PASSWORD', payload : value})
    }
  }

  const fetchData = React.useCallback((un,pwd) => {
    if(un != undefined && pwd != undefined)
    {
    LoginService.checkIfUserIsValid(un,pwd).then(response => {
          if(response.status === 200) { 
            if(response.data !== undefined)
            {
              localStorage.setItem('userId',un);
              localStorage.setItem('isLoggedIn',true);
              localStorage.setItem('branchCode',response.data.Department);
              history.push("/complaints");
              props.onHide();
              setValidFlag(false);
            }
            else
            {
              setValidFlag(true);
            }
          }
       })
      }
  }, [])

  function submitForm(event) {
    event.preventDefault();
    console.log(userId);
      fetchData(userId, password);
  }

  React.useEffect(() => {
    fetchData()
  }, [fetchData])


    return (
      <>
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
                <Form.Control type="email" placeholder="Enter email" onChange={setValueOfUserId} required/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={setValueOfUserPassword} required/>
                <Form.Text className="text-muted">
                   { (!showError) ? "Your password will always be encrypted" 
                   :<font color="red">Either username or password is incorrect. Please try again.</font> }
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
      </>
    );
  }
  
  export default LoginModal;
