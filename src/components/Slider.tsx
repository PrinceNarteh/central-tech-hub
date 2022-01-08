import styled from "styled-components";
import { Button } from "./styles";

interface SliderProps {
  src: string;
}

const Slider = ({ src }: SliderProps) => {
  const SliderStyle = styled.div`
    height: calc(100vh - 9rem);
    overflow: hidden;
    color: white;
    position: relative;
    background-image: url(${src});
    background-size: cover;
    background-repeat: none;

    .text-box {
      position: absolute;
      width: 100%;
      inset: 0;
      z-index: 1;
      background-color: rgba(29, 26, 53, 0.7);
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      padding-left: 10%;

      .title {
        font-size: clamp(5vh, 5rem, 15vw);
      }

      p {
        margin: 2rem 0;
        font-size: 2rem;
        width: 50%;
      }
    }
  `;
  return (
    <SliderStyle>
      <div className="text-box">
        <h1 className="title">
          Web <br />
          Development
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          aliquam? Consequuntur quibusdam cum quas, earum deserunt commodi
          quisquam quae nobis.
        </p>
        <Button>Read more...</Button>
      </div>
    </SliderStyle>
  );
};

export default Slider;
