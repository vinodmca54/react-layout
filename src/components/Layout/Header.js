
import React, { Component } from 'react';
import { Navbar,NavDropdown,Nav,FormControl,Button,Form } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link ,NavLink} from "react-router-dom";
import './../../assets/css/style.css';

class Header extends React.Component {
  render() {
     return (
      <Navbar bg="light" expand="lg">
      <Navbar.Brand><Link to="/home">Home</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="register-link" to="/register">Register</Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
     );
  }
}
export default Header;
