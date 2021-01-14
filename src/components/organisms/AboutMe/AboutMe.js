import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../Theme/MineStyle';

import BackgroundSection from '../../atoms/BackgroundSection/BackgroundSection';
import TitleBox from '../../atoms/TitleBox/TitleBox';
import BackgroundDiv from '../../atoms/ContentBox/ContentBox';
import AddImager from '../../atoms/AddImager/AddImager';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import MeIcon from '../../../assets/AboutMe/oMnieZdjęcie.png';
import Data from '../../../assets/DataJson/AboutMeData.json';
import BanerAboutMeContact from '../../molecules/BanerAboutMeContact/BanerAboutMeContact';

// import rozwojIcon from '../../../assets/AboutMe/oMnieRozwoj.png';
// import jezykiIcon from '../../../assets/AboutMe/oMnieJezyki.png';
// import pasjeIcon from '../../../assets/AboutMe/oMniePasje.png';

const WrapperContent = styled.div`
  padding: 6em 0;

  .StyleBox {
    justify-content: space-around;
    flex-wrap: wrap;
  }

  @media ${({ theme }) => theme.mediaQueries.md} {
    .StyleBox {
      width: 100vw;
    }
  }
`;

const WrapperElement = styled.div`
  padding: 0.2em;
  min-height: 320px;
  max-width: 300px;
  text-align: left;
  font-size: 20px;

  .titleBoxInAboutMe {
    display: flex;
    justify-content: space-evenly;
  }
`;

const AboutMe = () => (
  <BackgroundSection BgCol={theme.colors.AdditionalColorSection}>
    <WrapperContent>
      <TitleBox>O mnie</TitleBox>
      <BackgroundDiv className="StyleBox" Bgblack>
        <AddImager icons={MeIcon} width="250px" height="320px" margin="10px" />

        {Data.DataAboutMe.map((item) => (
          <WrapperElement>
            <div className="titleBoxInAboutMe">
              <AddImager icons={item.image} width="85px" height="85px" />
              <Paragraph WhiteCol>{item.title}</Paragraph>
            </div>
            <Paragraph WhiteCol>{item.discription}</Paragraph>
          </WrapperElement>
        ))}
      </BackgroundDiv>
    </WrapperContent>
    <BanerAboutMeContact />
  </BackgroundSection>
);

export default AboutMe;
