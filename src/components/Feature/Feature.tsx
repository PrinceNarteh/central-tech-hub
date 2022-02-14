import React from "react";
import styled from "styled-components";
import { Heading } from "../InfoSection/InfoSection.elements";
import { Column } from "../styles/Column";
import { Section } from "../styles/Section";
import { Title } from "../styles/Title";
import { FeatureContainer, InfoBox } from "./Feature.styles";

export const Feature = () => {
  return (
    <Section fluid overlay noPadding>
      <Column>
        <Image src="./welcome.jpg" alt="" />
      </Column>
      <Column align="start">
        <Inner>
          <Heading>Feature</Heading>
          <Title as="h3" color="#27AFE8">
            What We Do
          </Title>
          <Card>
            <Title as="h6" fontSize={2}>
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
        </Inner>
      </Column>
    </Section>
  );
};

const Inner = styled.div`
  padding: 2rem;

  & > h3,
  & > h6 {
    text-align: center;
  }
`;

const Card = styled(InfoBox)`
  max-width: 80%;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: grayscale(0.7);

  &:hover {
    filter: grayscale(0);
  }
`;
