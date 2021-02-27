import { Navbar,Nav } from "react-bootstrap"; 

function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Women Grievance</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Mission</Nav.Link>
      <Nav.Link href="#pricing">Login</Nav.Link>
    </Nav>
  </Navbar>
    );
  }
  
  export default NavigationBar;