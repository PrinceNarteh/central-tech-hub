import styled from "styled-components";
import { InfoSectionProps } from "../InfoSection/InfoSection";
import { Container } from "../styles";

export const SliderContainer = styled(Container)`
  height: 100%;
  max-width: 130rem;
`;

export const Row = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }: InfoSectionProps) =>
    imgStart ? "row-reverse" : "row"};
  height: 100%;
`;

export const Column = styled.div`
  flex: 1;
  flex-basis: 50%;
  display: flex;
  align-items: center;
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
  z-index: 2;

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

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: clamp(50px, 5vw, 5vw);
  line-height: 1.1;
  color: ${({ lightText }: InfoSectionProps) =>
    lightText ? "#f7f8fa" : "#1c2237"};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }: InfoSectionProps) =>
    lightTextDesc ? "#a9b3c1" : "#1c2237"};
`;
