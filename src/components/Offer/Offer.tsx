import styled from "styled-components";
import OfferCard from "../styles/OfferCard";
import { Row } from "../styles/Row";
import Title from "../Title";
import { OfferColumn, OfferContainer } from "./Offer.elements";

const Offer = () => {
  return (
    <OfferStyle>
      <img src="offer.png" alt="" />
      <div className="top">
        <Title as="h4" underline>
          WHAT WE DO
        </Title>
        <Title fontSize={4} as="h2" textAlign="center">
          We Provide Exclusive Services <br />
          For Your Business
        </Title>
      </div>
      <OfferContainer>
        <Row imgStart={false}>
          <OfferColumn>
            <OfferCard />
            <OfferCard />
            <OfferCard />
            <OfferCard />
          </OfferColumn>
        </Row>
      </OfferContainer>
    </OfferStyle>
  );
};

const OfferStyle = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: #eee;
  position: relative;
  padding-top: 5rem;

  img {
    position: absolute;
    right: 0;
    bottom: 0;
    max-width: 40%;
  }

  &::after {
    content: "";
    background: url(offer.png);
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 3rem;
    margin: auto 10%;
    max-width: 80rem;
    margin-top: 5rem;

    .right {
      img {
        width: 100%;
      }
    }
  }
`;

export default Offer;
