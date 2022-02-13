import styled from "styled-components";

export const FeatureContainer = styled.section`
  display: flex;
  background-image: url("top-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  img {
    width: 100%;
  }
`;

export const InfoBox = styled.div`
  background-color: transparent;
  background-image: linear-gradient(135deg, #091d42 0%, #0a3967 100%);
  padding: 2em 2em 2em 2em;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-color: #0a3967;
  border-radius: 10px 10px 10px 10px;
`;
