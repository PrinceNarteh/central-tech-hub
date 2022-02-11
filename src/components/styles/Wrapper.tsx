import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;
  align-content: ${({
    alignContent,
  }: {
    alignContent?: "flex-start" | "center" | "end";
  }) => (alignContent ? alignContent : "flex-start")};
`;
