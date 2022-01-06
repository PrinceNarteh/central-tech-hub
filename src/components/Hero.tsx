import styled from "styled-components";
import { Container } from "./styles";
import Title from "./Title";

const Hero = () => {
  return (
    <HeroStyle>
      <Container>
        <Title as="h1" fontSize={6} color="#fff">
          Hero Section
        </Title>
      </Container>
    </HeroStyle>
  );
};

const HeroStyle = styled.section`
  min-height: calc(100vh - 10rem);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(29, 26, 53, 0.5), rgba(29, 26, 53, 0.5)),
    url("hero.jpg");
  background-size: cover;
`;

export default Hero;
