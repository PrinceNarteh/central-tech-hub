import styled from "styled-components";
import { Theme } from "../theme";
import PhoneCall from "./PhoneCall";
import { Logo } from "./styles/Logo";
import NavItems from "./styles/NavItems";

const Navbar = () => {
  return (
    <NavbarStyle>
      <div className="container">
        <Logo src="central-tech-hub-logo.png" alt="Central Tech Hub Logo" />
        <NavItems />
        <PhoneCall />
      </div>
    </NavbarStyle>
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
