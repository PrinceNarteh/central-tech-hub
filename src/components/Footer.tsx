import styled from "styled-components";
import { theme } from "../theme";
import PhoneCall from "./PhoneCall";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="company">
        <img src="central-tech-hub-logo.png" alt="" />
        <p>
          Central Hub, Being the umbrella hub of Code Coast, The Central Tech
          Hub is "Hard Core" technology skills training, innovation, invention
          business development, All driven by practical research and development
        </p>

        <h2>Contact Us</h2>
        <PhoneCall />
      </div>
      <div className="services d-flex">
        <h3>Company</h3>
        <ul>
          <li>Our Services</li>
          <li>Latest News</li>
          <li>Meet Consultant</li>
          <li>Company History</li>
          <li>IT Consultants</li>
          <li>Success Story</li>
        </ul>
      </div>
      <div className="links d-flex">
        <h3>Quick Links</h3>
        <ul>
          <li>Needs A Job?</li>
          <li>Setting & Privacy</li>
          <li>Join Our Team</li>
          <li>Free Consultation</li>
          <li>Subscribe News</li>
          <li>History Of Goals</li>
        </ul>
      </div>
      <div className="newsletter d-flex">
        <h3>Newsletters</h3>
      </div>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 4rem auto;

  p {
    font-size: 1.4rem;
  }

  h3 {
    color: ${theme.colors.primaryColor};
    font-size: 1.7rem;
    margin-bottom: 1rem;
  }

  li {
    padding: 0.3rem 0;
    font-size: 1.4rem;
  }

  .company {
    flex: 3;
    text-align: justify;

    img {
      width: 7.5rem;
    }

    p {
      margin: 1rem 0;
    }
  }

  .d-flex {
    flex: 1;
    flex-basis: 16rem;
    flex-shrink: 10;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

export default Footer;
