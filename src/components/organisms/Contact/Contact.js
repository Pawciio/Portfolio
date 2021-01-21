import React from 'react';
import styled from 'styled-components';

import BackgroundSection from '../../atoms/BackgroundSection/BackgroundSection';
import InputContact from '../../atoms/InputContact/InputContact';

const BgContactBox = styled.div`
  margin: 0.8em;
  padding: 3.5em;
  max-width: 750px;
  background: ${({ theme }) => theme.colors.ColorInContactBox};
  margin: 0 auto;
`;

const ContactBox = styled.div`
  background: white;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Contact = () => (
  <BackgroundSection Padding="3em 0" Background={''}>
    <BgContactBox>
      <ContactBox>
        <InputContact placeholder="Imię i nazwisko" />
        <InputContact placeholder="Email" />
        <InputContact InTexarea placeholder="Wiadomość" />
      </ContactBox>
    </BgContactBox>
  </BackgroundSection>
);

export default Contact;
