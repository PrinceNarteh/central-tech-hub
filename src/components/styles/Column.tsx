import styled from "styled-components";

interface ColumnProps {
  align?: "start" | "center" | "end";
  width?: number;
}

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }: ColumnProps) => (align ? align : "center")};
  width: ${({ width }: ColumnProps) => (width ? `${width}%` : `100%`)};

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-basis: 100%;
    max-width: 100%;
  }
`;
