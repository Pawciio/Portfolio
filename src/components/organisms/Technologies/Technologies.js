import React from 'react';
import styled from 'styled-components';

import BackgroundSection from '../../atoms/BackgroundSection/BackgroundSection';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import BoxElement from '../../atoms/BoxElement/BoxElement';
import AddImager from '../../atoms/AddImager/AddImager';

import LearnBg from '../../../assets/Technologies/componentBackCZegoUcz.png';
import IKnowBg from '../../../assets/Technologies/componentBackCoJuzUm.png';
import ToolsBg from '../../../assets/Technologies/componentBackNarze.png';
import LearnIcon from '../../../assets/Technologies/techCzegoUcze.png';
import IKnowIcon from '../../../assets/Technologies/techCoJuzUm.png';
import ToolsIcon from '../../../assets/Technologies/techNarzedzia.png';

const BanerTitle = styled.div`
  background: ${({ theme }) => theme.colors.PaddingOrangeAboutMeBaner};
  text-transform: uppercase;
  padding: 3em 0;
  display: flex;
  justify-content: center;
`;

const WrapperElement = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 5em 0;

  ul {
    color: white;
    font-size: 22px;
    text-align: center;
    letter-spacing: 2px;
    line-height: 25px;
    margin-top: 3em;

    ol {
      padding: 0;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.xs} {
    ul {
      font-size: 20px;
    }
  }
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;

  @media ${({ theme }) => theme.mediaQueries.xs} {
    p {
      font-size: 22px;
    }
    .scaleIcons {
      transform: scale(0.8);
      margin: 1em 1.5em;
    }
  }
`;

const Technologies = () => (
  <BackgroundSection Padding="5em 0" BgCol="black">
    <BanerTitle>
      <Paragraph WhiteCol>Poznane Technologie</Paragraph>
    </BanerTitle>
    <WrapperElement>
      <BoxElement icons={LearnBg}>
        <FlexBox>
          <AddImager className="scaleIcons" icons={LearnIcon} width="80px" height="80px" margin="2em 3em" />
          <Paragraph secondary WhiteCol Uppercase>
            Czego się uczę
          </Paragraph>
        </FlexBox>
        <ul>
          <ol>NodeJS</ol>
          <ol>Angular</ol>
          <ol>TypeScript</ol>
        </ul>
      </BoxElement>
      <BoxElement icons={IKnowBg}>
        <FlexBox>
          <AddImager className="scaleIcons" icons={IKnowIcon} width="80px" height="80px" margin="2em 3em" />
          <Paragraph secondary WhiteCol Uppercase>
            Co już umiem
          </Paragraph>
        </FlexBox>
        <ul>
          <ol>HTML</ol>
          <ol>CSS/SCSS</ol>
          <ol>JavaScript</ol>
          <ol>React</ol>
          <ol>Redux</ol>
          <ol>Bootstrap 4</ol>
          <ol>SQL</ol>
        </ul>
      </BoxElement>
      <BoxElement icons={ToolsBg}>
        <FlexBox>
          <AddImager className="scaleIcons" icons={ToolsIcon} width="95px" height="80px" margin="2em 3em" />
          <Paragraph secondary WhiteCol Uppercase>
            Narzędzia
          </Paragraph>
        </FlexBox>
        <ul>
          <ol>VS Code</ol>
          <ol>Xampp</ol>
          <ol>NPM/Yarn</ol>
          <ol>Figma</ol>
          <ol>Webpack</ol>
        </ul>
      </BoxElement>
    </WrapperElement>
  </BackgroundSection>
);

export default Technologies;
