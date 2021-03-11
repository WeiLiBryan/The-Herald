import React from "react";
import "./style.css";
import { Nav } from "react-bootstrap";
import API from "../../utils/API";

function Navbar() {

const logout = function () {
  API.logoutUser().then(function () {
    console.log("logged out")
  })
};

  return (
    <Nav defaultActiveKey="/home" as="ul" id="navybar">
  <Nav.Item as="li" >
    <Nav.Link href="/" id="brand">Herald</Nav.Link>
  </Nav.Item>
  
  <Nav.Item as="li" >
    <Nav.Link href="/map" className="nav-li">Map</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li" >
    <Nav.Link href="/profile" className="nav-li">Profile</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li" >
    <Nav.Link href="/login" className="nav-li">Login</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li" >
    <Nav.Link href="/login" className="nav-li" onClick={logout}>Logout</Nav.Link>
  </Nav.Item> 
</Nav>
  );
}
export default Navbar;
