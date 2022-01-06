import styled from "styled-components";
import { theme } from "../theme";
import { Container } from "./styles";
import Title from "./Title";

const About = () => {
  return (
    <AboutStyle>
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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi id
          modi minima similique enim obcaecati placeat, natus voluptate nesciunt
          laudantium aliquid sequi delectus et provident minus fugit, tempore,
          illo quaerat!
        </p>
      </div>
    </AboutStyle>
  );
};

const AboutStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 80%;
  margin: 0 auto;
  gap: 5rem;

  h4 {
    margin-bottom: 2rem;
  }

  .left-side {
    flex: 1;

    img {
      background-size: cover;
    }
  }

  .right-side {
    flex: 1;
  }

  p {
    font-size: 1.6rem;
    width: 80%;
    margin-top: 2rem;
    line-height: 3rem;
  }
`;

export default About;
