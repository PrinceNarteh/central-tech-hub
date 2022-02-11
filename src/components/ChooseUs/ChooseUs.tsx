import React from "react";
import styled from "styled-components";
import { InfoBox } from "../Feature/Feature.styles";
import { Heading } from "../InfoSection/InfoSection.elements";
import { Column } from "../styles/Column";
import { Paragraph } from "../styles/Paragraph";
import { Section } from "../styles/Section";
import { Title } from "../styles/Title";
import { Wrapper } from "../styles/Wrapper";

const advantages = [
  {
    title: "Protection",
    description:
      "Vivamus posuere suscipit nulla maecenas et dapibus eros diam nec consequat aptent.",
  },
  {
    title: "Good Review",
    description:
      "Vivamus posuere suscipit nulla maecenas et dapibus eros diam nec consequat aptent.",
  },
  {
    title: "24/7 Support",
    description:
      "Vivamus posuere suscipit nulla maecenas et dapibus eros diam nec consequat aptent.",
  },
  {
    title: "Prestigious",
    description:
      "Vivamus posuere suscipit nulla maecenas et dapibus eros diam nec consequat aptent.",
  },
];

export const ChooseUs = () => {
  return (
    <ChooseUsContainer>
      <Column width={50}>
        <Heading>Why Choose Us</Heading>
        <Title as="h3">
          See the difference professional services can do for you
        </Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </Paragraph>
      </Column>
      <Column>
        <Wrapper>
          {advantages.map((advantage, idx) => (
            <Card key={idx}>
              <Title as="h6" fontSize={2.5}>
                {advantage.title}
              </Title>
              <p>{advantage.description}</p>
            </Card>
          ))}
        </Wrapper>
      </Column>
    </ChooseUsContainer>
  );
};

const ChooseUsContainer = styled(Section)`
  padding: 0;
`;

const Card = styled(InfoBox)`
  flex: 1;
  min-width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: 0.3s;
  background-image: none;
  background-color: #091d42;

  p {
    font-size: 1.5rem;
    width: 90%;
    line-height: 1.5;
  }
`;
