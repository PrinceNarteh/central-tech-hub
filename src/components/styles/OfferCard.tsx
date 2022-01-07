import styled from "styled-components";
import { BiChalkboard } from "react-icons/bi";
import { theme } from "../../theme";

const OfferCard = () => {
  return (
    <OfferCardStyle>
      <BiChalkboard size={50} />

      <h2>Web Development</h2>
      <p>
        Recusandae doloremque nihil expedita velit unde perferendis animi eum ut
        est.
      </p>
      <a href="">Read More...</a>
    </OfferCardStyle>
  );
};

const OfferCardStyle = styled.div`
  min-width: 30rem;
  width: 20rem;

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
