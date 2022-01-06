import React from "react";
import styled, { css } from "styled-components";

interface TitleProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontSize?: number;
  color?: string;
  children: React.ReactNode;
  underline?: boolean;
}

const Title = ({
  as,
  fontSize,
  color,
  underline,
  children,
  ...props
}: TitleProps) => {
  const TitleStyled = styled(as)`
    font-size: ${fontSize ? fontSize : 2}rem;
    color: ${color ? color : "#333"};
    position: relative;

    ${underline &&
    css`
      &::before {
        content: "";
        display: block;
        position: absolute;
        width: 5rem;
        height: 0.2rem;
        background-color: ${color ? color : "#333"};
        left: 0;
        bottom: -0.5rem;
      }
    `}
  `;

  return <TitleStyled {...props}>{children}</TitleStyled>;
};

export default Title;
