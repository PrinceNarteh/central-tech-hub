import styled from "styled-components";
import { theme } from "../../theme";
import { Container } from "../styles";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
  background-color: ${theme.colors.primaryColor};
  position: relative;

  &::before {
    content: "";
    background-color: #fff;
    position: absolute;
    width: 30%;
    clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
    top: 0;
    left: 0;
    bottom: 0;
    transition: all 0.3s;
  }

  @media screen and (max-width: ${theme.breakPoints.md}) {
    &::before {
      width: 50%;
    }
  }
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 8rem;

  z-index: 1;
  width: 100%;
  max-width: 140rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 5rem;
  padding-right: 5rem;

  @media screen and (max-width: ${theme.breakPoints.lg}) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

export const NavLogo = styled(Link)`
  justify-content: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled.img`
  width: 8rem;
`;

export const Hamburger = styled.div`
  display: none;

  @media screen and (max-width: ${theme.breakPoints.md}) {
    display: block;
    top: 0;
    right: 0;
    cursor: pointer;
    font-size: 3rem;
    position: absolute;
    transform: translate(-100%, 60%);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: ${theme.breakPoints.md}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 8rem;
    left: ${({ clicked }: { clicked: boolean }) => (clicked ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${theme.colors.primaryColor};
    z-index: 999;
  }
`;

export const NavItem = styled.li`
  height: 8rem;
  border-bottom: ${theme.colors.secondaryColor};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-bottom: 0.2rem solid ${theme.colors.secondaryColor};
  }

  @media screen and (max-width: ${theme.breakPoints.md}) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  padding: 0.8rem 1.6rem;
  font-size: 1.6rem;
`;
