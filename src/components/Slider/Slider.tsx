import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import {
  Column,
  Heading,
  Row,
  SliderContainer,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./Slider.elements";

export interface InfoSectionProps {
  buttonLabel?: string;
  description?: string;
  headline?: string;
  imgStart?: boolean;
  lightText?: boolean;
  lightTextDesc?: boolean;
  lightTopLine?: boolean;
  topLine?: string;
  src: string;
}

const Slider = ({
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  topLine,
  headline,
  description,
  buttonLabel,
  src,
}: InfoSectionProps) => {
  const SliderStyle = styled.div`
    height: calc(100vh - 9rem);
    overflow: hidden;
    color: white;
    position: relative;
    background-image: url(${src});
    background-size: cover;
    background-repeat: none;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background-color: rgba(29, 26, 53, 0.6);
    }
  `;
  return (
    <SliderStyle>
      <SliderContainer>
        <Row imgStart={imgStart}>
          <Column>
            <TextWrapper>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
              <Link to="/sign-up">
                <Button bigFont large primary>
                  {buttonLabel}
                </Button>
              </Link>
            </TextWrapper>
          </Column>
        </Row>
      </SliderContainer>
    </SliderStyle>
  );
};

export default Slider;
