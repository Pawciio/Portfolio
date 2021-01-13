import React from 'react';
import styled from 'styled-components';
import TitleBox from '../../atoms/TitleBox/TitleBox';
import BackgroundDiv from '../../atoms/ContentBox/ContentBox';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import AddImager from '../../atoms/AddImager/AddImager';
import Icons from '../../../assets/quote.png';

const Wrapper = styled.div`
  .ContentText {
    max-width: 50vw;
  }

  .quote {
    position: relative;
    top: -35px;
  }
`;

const ContentHeaderBox = () => (
  <Wrapper>
    <TitleBox Name>Paweł Chołda</TitleBox>
    <BackgroundDiv>
      <AddImager className="quote" icons={Icons} width="65px" height="65px" margin="20px" />
      <Paragraph className="ContentText">
        Jestem ambitnym, pracowitym absolwentem studiów inżynierskich, chętnie zdobywam nowe doświadczenie. Moim celem zawodowym
        jest zostać fullstack developerem.
      </Paragraph>
    </BackgroundDiv>
  </Wrapper>
);

export default ContentHeaderBox;
