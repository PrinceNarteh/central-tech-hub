import React from "react";
import styled from "styled-components";
import { InfoBox } from "../Feature/Feature.styles";
import { Heading } from "../InfoSection/InfoSection.elements";
import { Column } from "../styles/Column";
import { Paragraph } from "../styles/Paragraph";
import { Section } from "../styles/Section";
import { Title } from "../styles/Title";
import { Wrapper } from "../styles/Wrapper";
import { BiCheckShield } from "react-icons/bi";
import { WiStars } from "react-icons/wi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiTrophyCup } from "react-icons/gi";

const advantages = [
  {
    icon: <BiCheckShield size={30} color="#2cd97b" />,
    title: "Protection",
    description:
      "Vivamus posuere suscipit nulla maecenas et dapibus eros diam nec consequat aptent.",
  },
  {
    icon: <WiStars size={30} color="#2cd97b" />,
    title: "Good Review",
    description:
      "Vivamus posuere suscipit nulla maecenas et dapibus eros diam nec consequat aptent.",
  },
  {
    icon: <RiCustomerService2Fill size={30} color="#2cd97b" />,
    title: "24/7 Support",
    description:
      "Vivamus posuere suscipit nulla maecenas et dapibus eros diam nec consequat aptent.",
  },
  {
    icon: <GiTrophyCup size={30} color="#2cd97b" />,
    title: "Prestigious",
    description:
      "Vivamus posuere suscipit nulla maecenas et dapibus eros diam nec consequat aptent.",
  },
];

export const ChooseUs = () => {
  return (
    <ChooseUsContainer>
      <Column width={40}>
        <Heading>Why Choose Us</Heading>
        <Title as="h3">
          See the difference professional services can do for you
        </Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </Paragraph>
      </Column>
      <Column width={60}>
        <Wrapper>
          {advantages.map((advantage, idx) => (
            <Card key={idx}>
              <div className="icon">{advantage.icon}</div>
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
  min-width: 22rem;
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

  .icon {
    margin-bottom: 1rem;
  }
`;
