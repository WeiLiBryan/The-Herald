import react from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import API from "../../utils/API";

function nav() {
  return (
    <div className="navbar">
      <div className="nav">
        <NavLink>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Signup</Nav.Link>
          </Nav>
        </NavLink>
      </div>
    </div>
  );
}
