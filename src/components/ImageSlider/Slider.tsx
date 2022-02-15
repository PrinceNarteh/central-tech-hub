import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import {
  Heading,
  SliderContainer,
  Subtitle,
  TextWrapper,
} from "./Slider.elements";
import { Row } from "../styles/Row";
import { Column } from "../styles/Column";

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
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  src,
}: InfoSectionProps) => {
  const SliderStyle = styled.div`
    height: calc(100vh - 8rem);
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
        <Row imgStart={false}>
          <Column align="start">
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
