import styled from "styled-components";

export const Column = styled.div`
  flex: 1;
  flex-basis: 50%;
  max-width: 50%;
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 15px;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-basis: 100%;
    max-width: 100%;
  }
`;
