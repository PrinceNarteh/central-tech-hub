import styled from "styled-components";
import { BiChalkboard } from "react-icons/bi";

const OfferCard = () => {
  return (
    <OfferCardStyle>
      <BiChalkboard size={30} />

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
  min-width: 20rem;
  width: 20rem;
`;

export default OfferCard;
