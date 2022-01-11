import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import PhoneCall from "../PhoneCall";
import {
  Hamburger,
  Nav,
  NavbarContainer,
  NavIcon,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
} from "./Navbar.elements";

const Navbar = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClicked = () => setClicked(!clicked);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon src="central-tech-hub-logo.png" />
          </NavLogo>
          <Hamburger onClick={handleClicked}>
            {clicked ? <FaTimes /> : <FaBars />}
          </Hamburger>
          <NavMenu clicked={clicked}>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/products">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact">Contact</NavLink>
            </NavItem>
          </NavMenu>
          <PhoneCall />
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
