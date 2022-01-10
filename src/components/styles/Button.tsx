import styled from "styled-components";
import { theme } from "../../theme";

interface Theme {
  primary?: boolean;
  large?: boolean;
  bigFont?: boolean;
}

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }: Theme) => (primary ? "#4B59F7" : "#0467FB")};
  white-space: nowrap;
  padding: ${({ bigFont }: Theme) => (bigFont ? "12px 64px" : "10px 20px")};
  color: ${theme.colors.light};
  font-size: ${({ bigFont }: Theme) => (bigFont ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: ${theme.colors.light};
    background-color: ${({ primary }: Theme) =>
      primary ? "#0467FB" : "#4B59F7"};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
