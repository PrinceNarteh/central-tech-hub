import styled from "styled-components";

interface WrapperProps {
  gap?: number;
  alignContent?: "flex-start" | "center" | "end";
}

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ gap }: WrapperProps) => (gap ? `${gap}rem` : `2rem`)};
  align-content: ${({ alignContent }: WrapperProps) =>
    alignContent ? alignContent : "flex-start"};
`;
