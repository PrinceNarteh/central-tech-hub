import styled, { css } from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 114rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 5rem;
  padding-right: 5rem;

  ${({ flex }: { flex?: boolean }) =>
    flex &&
    css`
      display: flex;
    `}

  @media screen and (max-width: ${theme.breakPoints.lg}) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;
