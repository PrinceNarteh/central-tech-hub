import styled from "styled-components";

const NavItems = () => {
  return (
    <NavItemsStyle>
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Contact</li>
    </NavItemsStyle>
  );
};

const NavItemsStyle = styled.ul`
  display: flex;
`;

export default NavItems;
