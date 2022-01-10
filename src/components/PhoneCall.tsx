import styled from "styled-components";
import { BiPhoneCall } from "react-icons/bi";
import { theme, Theme } from "../theme";

const PhoneCall = () => {
  return (
    <PhoneCallStyle>
      <div className="phone-icon">
        <BiPhoneCall color="black" fontSize={20} />
      </div>
      <div className="text">
        <span className="text">Phone Number</span>
        <span>(+233) 240 865 997</span>
      </div>
    </PhoneCallStyle>
  );
};

const PhoneCallStyle = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;

  .phone-icon {
    background-color: white;
    margin-right: 1rem;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text:first-child {
    color: ${({ theme }: { theme: Theme }) => theme.colors.secondaryColor};
  }

  > div {
    color: white;

    span {
      display: block;
    }
  }

  @media screen and (max-width: ${theme.breakPoints.md}) {
    display: none;
  }
`;

export default PhoneCall;
