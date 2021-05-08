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
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">Women Grievance</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            
           
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
                 localStorage.clear();
                 setModalShow(true);
                 setLogout(false);                                      
                }}>Login</Nav.Link>
            }
          </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Login show={modalShow} onHide={() => setModalShow(false)}/>
      </>
    );
  }
  
  export default NavigationBar;