import styled from "styled-components";
import { Container } from "../styles";
import { Column } from "../styles/Column";

export const OfferContainer = styled(Container)`
  min-height: calc(100vh - 150px);
  display: flex;
  align-items: center;
`;

export const OfferColumn = styled(Column)`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 70%;
  max-width: 70%;
  gap: 2rem;

  @media screen and (max-width: 959px) {
    justify-content: center;
    flex-basis: 70%;
    margin: 0 auto;
  } ;
`;
