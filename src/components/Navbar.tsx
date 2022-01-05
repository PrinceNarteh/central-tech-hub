import styled from "styled-components";
import NavItems from "./NavItems";
import { Logo } from "./styles/Logo";

const Navbar = () => {
  return (
    <NavbarStyle>
      <Logo src="logo.png" alt="Central Tech Hub Logo" />
      <NavItems />
    </NavbarStyle>
  );
};

const NavbarStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Navbar;
