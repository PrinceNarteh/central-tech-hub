import React from "react";
import styled, { css } from "styled-components";
import { Container } from "./Container";

interface SectionProps {
  fluid?: boolean;
  noPadding?: boolean;
  overlay?: boolean;
  children: React.ReactNode;
}

export const Section = ({
  fluid,
  noPadding,
  overlay,
  children,
}: SectionProps) => {
  const SectionStyled = styled(Container)`
    display: flex;
    padding-top: 10rem;
    padding-bottom: 5rem;
  `;

  if (overlay) {
    const SectionWithOverlay = styled.section`
      display: flex;
      padding-top: 10rem;
      padding-bottom: 5rem;
      background-color: #091d42;

      ${noPadding &&
      css`
        padding: 0;
      `}

      background-image: linear-gradient(
          rgba(9, 29, 66, 0.8),
          rgba(9, 29, 66, 0.8)
        ),
        url("bg_memphis_1.png");
      background-position: center right;
      background-repeat: no-repeat;
      background-size: contain;
      opacity: 0.5;
    `;

    if (fluid) {
      return <SectionWithOverlay>{children}</SectionWithOverlay>;
    }

    return (
      <SectionWithOverlay>
        <Container flex>{children}</Container>
      </SectionWithOverlay>
    );
  }

  return <SectionStyled>{children}</SectionStyled>;
};
