import styled from "styled-components";

export const ListItem = styled.li`
  display: inline-block;
  font-size: 1.3rem;
  color: white;
  padding: 1rem 2rem;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 60%;
    height: 0.3rem;
    left: 20%;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    transform: scale(0, 1);
    transition: all 0.5s;
  }
  &:hover::after {
    transform: scale(1, 1);
  }
`;
