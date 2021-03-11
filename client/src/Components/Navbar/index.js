import React from "react";
import "./style.css";
import { Nav } from "react-bootstrap";
import API from "../../utils/API";

function Navbar() {
  const logout = function () {
    API.logoutUser().then(function () {
      console.log("logged out");
    });
  };

  return (
    <Nav defaultActiveKey="/home" className="nav" as="ul">
      <Nav.Item as="li" className="topic">
        <Nav.Link href="/">Herald</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/login" className="liItem">
          Login
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/map" className="liItem">
          Map
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/profile" className="liItem">
          Profile
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/login" className="liItem" onClick={logout}>
          Logout
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
export default Navbar;
