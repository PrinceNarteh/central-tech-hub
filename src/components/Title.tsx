import React from "react";
import styled from "styled-components";

interface TitleProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontSize?: number;
  color?: string;
  children: React.ReactNode;
}

const Title = ({ as, fontSize, color, children, ...props }: TitleProps) => {
  const TitleStyled = styled(as)`
    font-size: ${fontSize ? fontSize : 2}rem;
    color: ${color ? color : "#fff"};
  `;

  return <TitleStyled {...props}>{children}</TitleStyled>;
};

export default Title;
