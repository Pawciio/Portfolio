import React from "react";
import styled from "styled-components";

import BackgroundSection from "../../atoms/BackgroundSection/BackgroundSection";
import InputContact from "../../atoms/InputContact/InputContact";
import ButtonContact from "../../atoms/Button/ButtonContact";

import BackgroundWallpaper from "../../../assets/BackgroundContact/BackgroundContact.png";

const BgContactBox = styled.div`
  margin: 0.8em;
  padding: 3.5em;
  max-width: 750px;
  background: ${({ theme }) => theme.colors.ColorInContactBox};
  margin: 0 auto;

  @media ${({ theme }) => theme.mediaQueries.xs} {
    padding: 0.8em;
  }
`;

const ContactBox = styled.div`
  background: white;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.mediaQueries.xs} {
    padding: 0.8em;
  }
`;

const TitleContact = styled.h2`
  font-size: 32px;
  font-weight: lighter;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  position: relative;
  margin-bottom: 2em;

  &::before {
    content: "";
    position: absolute;
    bottom: -0.8em;
    left: -10%;
    height: 2px;
    width: 120%;
    background: ${({ theme }) => theme.colors.ColorInContactBox};
  }

  @media ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 24px;
  }
  @media ${({ theme }) => theme.mediaQueries.xs} {
    font-size: 18px;
  }
`;

const Contact = () => (
  <BackgroundSection Padding="3em 0" Background={BackgroundWallpaper}>
    <BgContactBox>
      <ContactBox>
        <TitleContact>Skontaktuj się</TitleContact>
        <InputContact placeholder="Imię i nazwisko" />
        <InputContact placeholder="Email" />
        <InputContact InTexarea placeholder="Wiadomość" />
        <ButtonContact>Wyślij</ButtonContact>
      </ContactBox>
    </BgContactBox>
  </BackgroundSection>
);

export default Contact;
