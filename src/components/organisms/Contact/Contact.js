import React from 'react';
import styled from 'styled-components';

import BackgroundSection from '../../atoms/BackgroundSection/BackgroundSection';

const WrapperElement = styled.div`
  margin: 0;
`;

const Contact = () => (
  <BackgroundSection Background={''}>
    <WrapperElement>Hello </WrapperElement>
  </BackgroundSection>
);

export default Contact;
