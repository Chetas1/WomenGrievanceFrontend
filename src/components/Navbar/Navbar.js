import { Navbar,Nav } from "react-bootstrap"; 
import Login from "../Login/Login";
import React from 'react';
import { useHistory } from "react-router-dom";

function NavigationBar() {
  const history = useHistory();
  const [modalShow, setModalShow] = React.useState(false);
  const [loggedOut,setLogout] = React.useState(false); 

    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Women Grievance</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Mission</Nav.Link>
           
            {
              (localStorage.getItem('isLoggedIn')== 'true') ?
              <Nav.Link onClick={() =>{history.push('/complaints')}}>Messages</Nav.Link> : <> </>
            }
            {
              (localStorage.getItem('isLoggedIn')== 'true') ?
              <Nav.Link onClick={() =>{history.push('/timeline')}}>Timeline</Nav.Link> : <> </>
            }
            {
              (localStorage.getItem('isLoggedIn')== 'true') ?
               <Nav.Link onClick={() =>{
                  localStorage.setItem('isLoggedIn',false);
                  localStorage.setItem('userId','');
                  history.push('/');
                  setLogout(true);
               } }>Logout</Nav.Link> :
               <Nav.Link onClick={() => {
                 setModalShow(true)
                 setLogout(false);                                      
                }}>Login</Nav.Link>
            }
          </Nav>
        </Navbar>
        <Login show={modalShow} onHide={() => setModalShow(false)}/>
      </>
    );
  }
  
  export default NavigationBar;