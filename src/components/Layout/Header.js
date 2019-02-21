import React from "react";
import { Navbar, Nav, FormControl, Button, Form } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./../../assets/css/style.css";

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="link" to="/home">
              Home
            </Link>
            <Link className="link" to="/register">
              Register
            </Link>
            <Link className="link" to="/getRecord">
              Record
            </Link>
            <Link className="link" to="/history-finding">
              History Finding
            </Link>
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
