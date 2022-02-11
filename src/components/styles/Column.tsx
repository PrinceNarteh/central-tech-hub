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
