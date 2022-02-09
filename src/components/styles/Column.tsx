import styled from "styled-components";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width }: { width?: number }) => (width ? `${width}%` : `50%`)};
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
