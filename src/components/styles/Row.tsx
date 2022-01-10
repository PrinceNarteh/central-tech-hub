import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }: { imgStart: boolean }) =>
    imgStart ? "row-reverse" : "row"};
  height: 100%;
`;
