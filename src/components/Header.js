import React from "react";
import { Nav, Navbar, NavbarBrand, NavbarText } from "reactstrap";
import logo from "../image/Logo-Horizont.jpeg";

const Header = () => {
  return (
    <div>
      <Nav>
        <Navbar className="container">
          <NavbarBrand>
            <img src={logo} width="165px" />
          </NavbarBrand>

          <NavbarBrand>
            <NavbarBrand>Menu</NavbarBrand>
            <NavbarBrand>About</NavbarBrand>
            <NavbarBrand>Login</NavbarBrand>
          </NavbarBrand>
        </Navbar>
      </Nav>
    </div>
  );
};

export default Header;
