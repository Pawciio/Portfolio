import React from 'react';
import styled from 'styled-components';
import Background from '../../atoms/BackgroundSection/BackgroundSection';
import BackgroundHeader from '../../../assets/BackgroundHeader/BackgroundHeader.png';
import ContentHeaderBox from '../../molecules/ContentHeaderBox/ContentHeaderBox';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import AddImager from '../../atoms/AddImager/AddImager';
import Vicon from '../../../assets/Other-DetailImage/Vimage.png';

const WrapperElement = styled.div`
  padding-top: 15em;
  height: 100vh;
  max-height: 1100px;
  position: relative;
`;

const Baner = styled.div`
  background: ${({ theme }) => theme.BlackOpacity};
  padding: 1em;
  color: white;
  width: 100vw;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = () => (
  <Background Background={BackgroundHeader}>
    <WrapperElement>
      <ContentHeaderBox />
      <Baner>
        <Paragraph Uppercase>Poznaj Mnie</Paragraph>
        <AddImager icons={Vicon} width="53px" height="42px" margin="8px" />
      </Baner>
    </WrapperElement>
  </Background>
);

export default Header;
