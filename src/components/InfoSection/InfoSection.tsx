import { Link } from "react-router-dom";
import { Button, Container } from "../styles";
import {
  Heading,
  Img,
  ImgWrapper,
  InfoColumn,
  InfoRow,
  InfoSec,
  Subtitle,
  TextWrapper,
  Title,
  TopLine,
} from "./InfoSection.elements";

export interface InfoSectionProps {
  alt?: string;
  buttonLabel?: string;
  description?: string;
  headline?: string;
  img?: string;
  imgStart?: boolean;
  lightBg?: boolean;
  lightText?: boolean;
  lightTextDesc?: boolean;
  lightTopLine?: boolean;
  topLine?: string;
  start?: boolean;
}

const InfoSection = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  start,
}: InfoSectionProps) => {
  return (
    <InfoSec lightBg={lightBg}>
      <Container>
        <InfoRow imgStart={imgStart}>
          <InfoColumn>
            <TextWrapper>
              <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
              {/* <Title lightText={lightText}>{headline}</Title> */}
              <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
              <Link to="/sign-up">
                <Button bigFont large primary>
                  {buttonLabel}
                </Button>
              </Link>
            </TextWrapper>
          </InfoColumn>
          <InfoColumn>
            <ImgWrapper start={start}>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </InfoColumn>
        </InfoRow>
      </Container>
    </InfoSec>
  );
};

export default InfoSection;
