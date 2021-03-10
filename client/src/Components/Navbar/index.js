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
    <div className="navbar navbar-expand-lg navbar-light bg-gray">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
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
    </div>
  );
}
export default Navbar;
