import { Navbar,Nav } from "react-bootstrap"; 
import Login from "../Login/Login";
import React from 'react';

function NavigationBar() {
  const [modalShow, setModalShow] = React.useState(false);

    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Women Grievance</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Mission</Nav.Link>
            <Nav.Link onClick={() => setModalShow(true)}>Login</Nav.Link>
          </Nav>
        </Navbar>
        <Login show={modalShow} onHide={() => setModalShow(false)}/>
      </>
    );
  }
  
  export default NavigationBar;