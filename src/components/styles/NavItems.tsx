import styled from "styled-components";
import { ListItem } from "./ListItem";

const NavItems = () => {
  return (
    <NavItemsStyle>
      <ListItem>Home</ListItem>
      <ListItem>About</ListItem>
      <ListItem>Services</ListItem>
      <ListItem>Contact</ListItem>
    </NavItemsStyle>
  );
};

const NavItemsStyle = styled.ul`
  display: flex;
`;

export default NavItems;
