
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top">
        <Navbar.Brand
          to="/"
          className="text-primary  mx-5 "
          style={{ fontFamily: "poppins", fontWeight: "550" }}
        >
          OneStopNews
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/General">
              General
            </Nav.Link>
            <Nav.Link as={Link} to="/Business">
              Business
            </Nav.Link>
            <Nav.Link as={Link} to="/Entertainment">
              Entertainment
            </Nav.Link>
            <Nav.Link as={Link} to="/Health">
              Health
            </Nav.Link>
            <Nav.Link as={Link} to="/Science">
              Science
            </Nav.Link>
            <Nav.Link as={Link} to="/Sports">
              Sports
            </Nav.Link>
            <Nav.Link as={Link} to="/Technology">
              Technology
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default BasicExample;
