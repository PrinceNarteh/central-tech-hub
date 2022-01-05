import React from "react";
import styled from "styled-components";

interface TitleProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontSize?: number;
  children: React.ReactNode;
}

const Title = ({ as, fontSize, children, ...props }: TitleProps) => {
  const TitleStyled = styled(as)`
    font-size: ${fontSize ? fontSize : 2}rem;
  `;

  return <TitleStyled {...props}>{children}</TitleStyled>;
};

export default Title;
