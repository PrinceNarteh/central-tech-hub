import styled from "styled-components";
import { theme } from "../theme";
import { Container } from "./styles";
import Title from "./Title";

const About = () => {
  return (
    <AboutStyle>
      <div className="inner">
        <div className="left-side">
          <img src="about.jpg" alt="" />
        </div>
        <div className="right-side">
          <Title
            as="h4"
            fontSize={1.5}
            color={`${theme.colors.secondaryColor}`}
            underline
          >
            About Company
          </Title>
          <Title as="h2" fontSize={4}>
            More than 5+ <br />
            years we provide <br />
            IT Solution
          </Title>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            id modi minima similique enim obcaecati placeat, natus voluptate
            nesciunt laudantium aliquid sequi delectus et provident minus fugit,
            tempore, illo quaerat!
          </p>
        </div>
      </div>
    </AboutStyle>
  );
};

const AboutStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  width: 80%;
  margin: 0 auto;
  gap: 5rem;

  .inner {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 2rem;

    img {
      width: 100%;
    }
  }

  h4 {
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.4rem;
    margin-top: 2rem;
    line-height: 2.5rem;
  }
`;

export default About;
