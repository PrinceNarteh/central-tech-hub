import React from "react";
import { Heading } from "../InfoSection/InfoSection.elements";
import { Column } from "../styles/Column";
import { FeatureContainer, InfoBox } from "./Feature.styles";
import { Title } from "../styles/Title";
import { Paragraph } from "../styles/Paragraph";
import styled from "styled-components";

export const Feature = () => {
  return (
    <FeatureContainer>
      <Column>
        <Image src="./welcome.jpg" alt="" />
      </Column>
      <Column align="start">
        <Heading>Feature</Heading>
        <Title as="h3" color="#27AFE8">
          What We Do
        </Title>
        <Card>
          <Title as="h6" fontSize={1}>
            Planning
          </Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            praesentium reprehenderit alias excepturi reiciendis maiores
            perspiciatis voluptate porro aperiam non.
          </p>
        </Card>
        <Card>
          <Title as="h6" fontSize={1}>
            Planning
          </Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            praesentium reprehenderit alias excepturi reiciendis maiores
            perspiciatis voluptate porro aperiam non.
          </p>
        </Card>
        <Card>
          <Title as="h6" fontSize={1}>
            Planning
          </Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            praesentium reprehenderit alias excepturi reiciendis maiores
            perspiciatis voluptate porro aperiam non.
          </p>
        </Card>
        <Card>
          <Title as="h6" fontSize={1}>
            Planning
          </Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            praesentium reprehenderit alias excepturi reiciendis maiores
            perspiciatis voluptate porro aperiam non.
          </p>
        </Card>
      </Column>
    </FeatureContainer>
  );
};

const Card = styled(InfoBox)`
  max-width: 80%;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  filter: grayscale(0.7);

  &:hover {
    filter: grayscale(0);
  }
`;
