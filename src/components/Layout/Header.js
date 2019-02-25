import React from "react";
import { Container, Image, Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./../../assets/css/style.css";

class Header extends React.Component {
  render() {
    return (
      <div class="header-bar">
        <Navbar bg="light" >
          <Navbar.Brand href="#home">
            <Container>
              <Image
                src={require("../../assets/images/hospital.png")}
                roundedCircle
              />
            </Container>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Patient Management System</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;
