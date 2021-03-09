import react from "react";
import "./style.css";
import { Navbar, NavbarBrand } from "react-router-dom";
import API from "../../utils/API";

function navbar() {
  return (
    <div className="Navbar">
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <NavbarBrand href="#">Home</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
}
export default navbar;
