import styled from "styled-components";
import { theme } from "../../theme";
import { InfoSectionProps } from "./InfoSection";

export const InfoSec = styled.section`
  color: ${theme.colors.light};
  padding: 160px 0;
  background: ${({ lightBg }: InfoSectionProps) =>
    lightBg ? `${theme.colors.light}` : `${theme.colors.primaryColor}`};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }: InfoSectionProps) =>
    imgStart ? "row-reverse" : "row"};
`;

export const InfoColumn = styled.div`
  flex: 1;
  flex-basis: 50%;
  max-width: 50%;
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

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }: InfoSectionProps) =>
    lightTopLine ? "#A9B3C1" : "#4B59F7"};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: clamp(20px, 3.5vw, 38px);
  line-height: 1.1;
  color: ${({ color }: { color?: string }) => (color ? `${color}` : "#f7f8fa")};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }: InfoSectionProps) =>
    lightTextDesc ? "#a9b3c1" : "#1c2237"};
`;

export const Heading = styled.h6`
  color: #2cd97b;
  font-family: "Saira", Sans-serif;
  font-size: 14px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 2rem;
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }: InfoSectionProps) =>
    start ? "flex-start" : "flex-end"};
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;
