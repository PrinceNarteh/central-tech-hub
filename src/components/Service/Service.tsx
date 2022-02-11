import React from "react";
import styled from "styled-components";
import { InfoBox } from "../Feature/Feature.styles";
import { Heading } from "../InfoSection/InfoSection.elements";
import { Column } from "../styles/Column";
import { Section } from "../styles/Section";
import { Title } from "../styles/Title";
import { Wrapper } from "../styles/Wrapper";

const services = [
  {
    title: "Cyber Security",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aliquid illum sed!",
    img: "./security.png",
  },
  {
    title: "Database",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aliquid illum sed!",
    img: "./server.png",
  },
  {
    title: "Cloud Service",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aliquid illum sed!",
    img: "./cloud.png",
  },
  {
    title: "Mobile App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aliquid illum sed!",
    img: "./smartphone.png",
  },
  {
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aliquid illum sed!",
    img: "./chat.png",
  },
  {
    title: "Online Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aliquid illum sed!",
    img: "./email.png",
  },
];

export const Service = () => {
  return (
    <Section>
      <Column>
        <Heading>Special Offer</Heading>
        <Title as="h3">Our Service</Title>
        <Wrapper>
          {services.map((service, idx) => (
            <ServiceBox key={idx}>
              <img src={service.img} alt="" />
              <Title as="h6" fontSize={2}>
                {service.title}
              </Title>
              <p>{service.description}</p>
            </ServiceBox>
          ))}
        </Wrapper>
      </Column>
    </Section>
  );
};

const ServiceBox = styled(InfoBox)`
  flex: 1;
  min-width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;
  background-image: none;
  background-color: #091d42;

  p {
    text-align: center;
    font-size: 1.5rem;
    width: 90%;
    line-height: 1.5;
  }

  img {
    width: 10rem;
    height: 10rem;
    margin-bottom: 1rem;
  }

  &:hover {
    border: 2px solid #27afe8;
  }
`;
