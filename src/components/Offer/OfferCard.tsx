import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

interface Props {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const OfferCard = ({ icon, title, content }: Props) => {
  return (
    <OfferCardStyle>
      {icon}

      <h2>{title}</h2>
      <p>{content}</p>
      <a href="">Read More...</a>
    </OfferCardStyle>
  );
};

const OfferCardStyle = styled.div`
  min-width: 30rem;
  width: 20rem;
  margin-bottom: 2rem;

  h2 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.4rem;
  }

  a {
    font-size: 1.6rem;
    color: ${theme.colors.secondaryColor};
  }
`;

export default OfferCard;
