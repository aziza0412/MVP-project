import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
const Nave = () => {
    const navbarStyle = {
        background: 'pink',
        
      };
    const Logo="client/image/logo.jpg";
  return (
    <Navbar style={navbarStyle} expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/books">All Books</Nav.Link>
        <Nav.Link href="/books/add">add</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    <Nav><Nav.Link href="/signin">Sign in</Nav.Link></Nav>
    <Nav><Nav.Link href="/signup">Sign up</Nav.Link></Nav>
    <Navbar.Brand href="/"> Books addict</Navbar.Brand>
    
  </Navbar>
);
};
 

export default Nave
