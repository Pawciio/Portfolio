import React from 'react';
import styled from 'styled-components';
import Background from '../../atoms/BackgroundSection/BackgroundSection';
import BackgroundHeader from '../../../assets/BackgroundHeader/BackgroundHeader.png';
import ContentHeaderBox from '../../molecules/ContentHeaderBox/ContentHeaderBox';

const WrapperElement = styled.div`
  height: 1000px; // test height

  
`;

const Header = () => (
  <Background Background={BackgroundHeader}>
    <WrapperElement>
      <ContentHeaderBox />
    </WrapperElement>
  </Background>
);

export default Header;
