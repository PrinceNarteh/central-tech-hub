import styled, { css } from "styled-components";

export const Paragraph = styled.p`
  width: 90%;
  font-size: 1.6rem;
  line-height: 1.4;
  ${({ marginBottom }: { marginBottom?: number }) =>
    marginBottom &&
    css`
      margin-bottom: ${marginBottom}rem;
    `}

  @media screen and (max-width: 600px) {
    font-size: 1.4rem;
  }
`;
