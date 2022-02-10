import React from "react";
import styled from "styled-components";

interface TitleProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: string;
  fontSize?: number;
  children?: React.ReactNode;
}

export const Title = ({ as, children }: TitleProps) => {
  const TitleStyle = styled(as)`
    margin-bottom: 20px;
    font-weight: 500;
    font-size: ${({ fontSize }: { fontSize: number }) =>
      fontSize ? `${fontSize}rem` : `clamp(20px, 3.5vw, 38px)`};
    line-height: 1.1;
    color: ${({ color }: { color?: string }) =>
      color ? `${color}` : "#27AFE8"};
  `;

  return <TitleStyle>{children}</TitleStyle>;
};
