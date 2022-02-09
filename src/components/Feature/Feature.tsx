import React from "react";
import { Heading, Title } from "../InfoSection/InfoSection.elements";
import { Column } from "../styles/Column";
import { FeatureContainer, InfoBox } from "./Feature.styles";

export const Feature = () => {
  return (
    <FeatureContainer>
      <Column>
        <img src="./welcome.jpg" alt="" />
      </Column>
      <Column>
        <Heading>Feature</Heading>
        <Title color="#27AFE8">What We Do</Title>
        <InfoBox>
          <Title>Planning</Title>
        </InfoBox>
      </Column>
    </FeatureContainer>
  );
};
