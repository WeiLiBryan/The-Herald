import React from "react";
import "./style.css";
import { Nav } from "react-bootstrap";


function Navbar() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
  <Nav.Item as="li">
    <Nav.Link href="/">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link href="/login">Login</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link href="/map">Map</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link href="/profile">Profile</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link href="#">Logout</Nav.Link>
  </Nav.Item>
</Nav>
  );
}
export default Navbar;
