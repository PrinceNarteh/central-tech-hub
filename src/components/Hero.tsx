import styled from "styled-components";
import { Container } from "./styles";
import Title from "./Title";

const Hero = () => {
  return (
    <HeroStyle>
      <div className="overlay"></div>
      <Container>
        <Title as="h1" fontSize={6}>
          Hero Section
        </Title>
      </Container>
    </HeroStyle>
  );
};

const HeroStyle = styled.section`
  height: calc(100vh - 10rem);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("hero.jpg");
  background-size: cover;
`;

export default Hero;
