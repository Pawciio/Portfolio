import React from 'react';
import styled from 'styled-components';
import Background from '../../atoms/BackgroundSection/BackgroundSection';
import BackgroundHeader from '../../../assets/BackgroundHeader/BackgroundHeader.png';
import TitleBox from '../../atoms/TitleBox/TitleBox';
import BackgroundDiv from '../../atoms/ContentBox/ContentBox';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const WrapperElement = styled.div`
  height: 1000px; // test height

  .ContentText {
    max-width: 45vw;
  }
`;

const Header = () => (
  <Background Background={BackgroundHeader}>
    <WrapperElement>
      <TitleBox Name>Paweł Chołda</TitleBox>
      <BackgroundDiv>
        <Paragraph className="ContentText">
          Jestem ambitnym, pracowitym absolwentem studiów inżynierskich, chętnie zdobywam nowe doświadczenie. Moim celem zawodowym
          jest zostać fullstack developerem.
        </Paragraph>
      </BackgroundDiv>
    </WrapperElement>
  </Background>
);

export default Header;
