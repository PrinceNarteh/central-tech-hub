import React from "react";
import styled from "styled-components";
import { InfoBox } from "../Feature/Feature.styles";
import { Heading } from "../InfoSection/InfoSection.elements";
import { Column } from "../styles/Column";
import { Title } from "../styles/Title";
import { Section } from "../styles/Section";
import { Wrapper } from "../styles/Wrapper";

const stats = [
  {
    number: "475",
    description: "Happy Client",
  },
  {
    number: "521",
    description: "Poject Finished",
  },
  {
    number: "20",
    description: "Our Team",
  },
  {
    number: "5",
    description: "Award Winning",
  },
];

export const OurCompany = () => {
  return (
    <OurCompanyStyle>
      <Column>
        <Heading>Fun Fact</Heading>
        <Title as="h3">Our Company by Number</Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In vitae
          incidunt consectetur deserunt quidem.
        </p>
        <Wrapper>
          {stats.map((stat, idx) => (
            <Card key={idx}>
              <Title as="h6" fontSize={6}>
                {stat.number}
                <small>+</small>
              </Title>
              <p>{stat.description}</p>
            </Card>
          ))}
        </Wrapper>
      </Column>
    </OurCompanyStyle>
  );
};

const OurCompanyStyle = styled(Section)`
  padding-top: 0;

  p {
    font-size: 1.8rem;
    margin-bottom: 3rem;
  }
`;

const Card = styled(InfoBox)`
  flex: 1;
  min-width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;
  background-image: none;
  border: none;
  padding: 0;
  justify-content: center;

  h6 {
    font-weight: 900;
    margin-bottom: 1rem;
  }

  p {
    font-size: 2rem;
  }
`;
