import styled from "styled-components";
import { Theme } from "../theme";
import { Logo } from "./styles/Logo";
import NavItems from "./styles/NavItems";

const Navbar = () => {
  return (
    <NavbarStyle>
      <Logo src="central-tech-hub-logo.png" alt="Central Tech Hub Logo" />
      <NavItems />
    </NavbarStyle>
  );
};

const NavbarStyle = styled.nav`
  background-color: ${({ theme }: { theme: Theme }) =>
    theme.colors.primaryColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;
`;

export default Navbar;
