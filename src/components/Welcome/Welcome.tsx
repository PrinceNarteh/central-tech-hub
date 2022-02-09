import React from "react";
import styled from "styled-components";
import { Heading, Title } from "../InfoSection/InfoSection.elements";
import { Column } from "../styles/Column";
import { Paragraph } from "../styles/Paragraph";
import { Section } from "../styles/Section";
import { Wrapper } from "../styles/Wrapper";

export const Welcome = () => {
  return (
    <Section>
      <Column width={40}>
        <Wrapper>
          <Heading>Welcome</Heading>
          <Title color="27AFE8">Let's Make Better World With Technology</Title>
          <Paragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            tempora quam, repellendus id eos impedit sequi eaque earum et, quas
            quaerat, non rem?
          </Paragraph>
        </Wrapper>
      </Column>
      <Column width={60}>
        <Image src="./welcome.jpg" alt="" />
      </Column>
    </Section>
  );
};

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 1rem;
`;
