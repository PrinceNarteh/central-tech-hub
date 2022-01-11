import styled from "styled-components";
import { InfoSectionProps } from "../InfoSection/InfoSection";
import { Container } from "../styles";

export const SliderContainer = styled(Container)`
  height: 100%;
  max-width: 130rem;
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
