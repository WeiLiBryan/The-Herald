import React from "react";
import "./style.css";
import { Nav } from "react-bootstrap";
import API from "../../utils/API";
import { useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();

  const logout = function () {
    API.logoutUser().then(function () {
      history.push("/login");
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-gray">
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
          <Nav.Link onClick={logout}>Logout</Nav.Link>
        </Nav.Item>
      </Nav>
    </nav>
  );
}
export default Navbar;
