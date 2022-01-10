import { useState } from "react";
import styled from "styled-components";
import { Theme } from "../../theme";
import PhoneCall from "../PhoneCall";
import { Logo } from "../styles/Logo";
import NavItems from "../styles/NavItems";
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
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

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

const NavbarStyle = styled.nav`
  background-color: ${({ theme }: { theme: Theme }) =>
    theme.colors.primaryColor};
  position: relative;

  .container {
    padding: 0 7.5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  &::before {
    content: "";
    background-color: #fff;
    position: absolute;
    width: 30%;
    clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
    top: 0;
    left: 0;
    bottom: 0;
  }
`;

export default Navbar;
