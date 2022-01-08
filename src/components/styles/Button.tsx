import styled from "styled-components";
import { theme } from "../../theme";

interface ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};

const ButtonStyle = styled.button`
  border: none;
  outline: none;
  background-color: ${theme.colors.primaryColor};
  color: white;
  padding: 1rem 2rem;
`;

export default Button;
