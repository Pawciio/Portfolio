import React from 'react';
import styled from 'styled-components';
import TitleBox from '../../atoms/TitleBox/TitleBox';
import BackgroundDiv from '../../atoms/ContentBox/ContentBox';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import AddImager from '../../atoms/AddImager/AddImager';
import Icons from '../../../assets/Other-DetailImage/quote.png';

const Wrapper = styled.div`
  .ContentText {
    max-width: 50vw;
    position: relative;
  }

  .quote {
    position: absolute;
    top: -40px;
    left: -90px;
  }

  @media ${({ theme }) => theme.mediaQueries.xs} {
    .ContentText {
      font-size: 16px;
    }
    .quote {
      transform: scale(0.5);
      left: -80px;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.sm} {
    .ContentText {
      max-width: 70vw;
    }
  } ;
`;

const ContentHeaderBox = () => (
  <Wrapper>
    <TitleBox Name>Paweł Chołda</TitleBox>
    <BackgroundDiv>
      <Paragraph className="ContentText">
        <AddImager className="quote" icons={Icons} width="65px" height="65px" margin="20px" />
        Jestem ambitnym, pracowitym absolwentem studiów inżynierskich, chętnie zdobywam nowe doświadczenie. Moim celem zawodowym
        jest zostać fullstack developerem.
      </Paragraph>
    </BackgroundDiv>
  </Wrapper>
);

export default ContentHeaderBox;
