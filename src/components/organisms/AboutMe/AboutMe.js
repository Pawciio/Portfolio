import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../Theme/MineStyle';

import BackgroundSection from '../../atoms/BackgroundSection/BackgroundSection';
import TitleBox from '../../atoms/TitleBox/TitleBox';
import BackgroundDiv from '../../atoms/ContentBox/ContentBox';
import AddImager from '../../atoms/AddImager/AddImager';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import MeIcon from '../../../assets/AboutMe/oMnieZdjęcie.png';
import BanerAboutMeContact from '../../molecules/BanerAboutMeContact/BanerAboutMeContact';

// import Data from '../../../assets/DataJson/AboutMeData.json';
import rozwojIcon from '../../../assets/AboutMe/oMnieRozwoj.png';
import jezykiIcon from '../../../assets/AboutMe/oMnieJezyki.png';
import pasjeIcon from '../../../assets/AboutMe/oMniePasje.png';

const WrapperContent = styled.div`
  padding: 6em 0;

  .StyleBox {
    flex-wrap: wrap;
  }

  @media ${({ theme }) => theme.mediaQueries.md} {
    .StyleBox {
      width: 100%;
      .ImagePaweł {
        display: none;
      }
    }
  }

  @media all and (max-width: 965px) {
    .StyleBox {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const WrapperElement = styled.div`
  padding: 0.8em;
  max-width: 300px;
  text-align: left;
  font-size: 20px;

  .titleBoxInAboutMe {
    display: flex;
    align-items: center;
    margin-bottom: 1em;
    div {
      margin-right: 1.5em;
    }
  }

  @media all and (max-width: 965px) {
    padding: 0.2em;
    max-width: 500px;
  }
`;

const DataAboutMe = [
  {
    id: 0,
    title: 'Rozwój',
    discription:
      'Aktualnie studiuję podyplomowo na kierunku Frontend z Angular, ciągle się dokształcam, robię kursy, czytam literaturę informatyczną.',
    image: rozwojIcon,
  },
  {
    id: 1,
    title: 'Języki',
    discription: 'Język angielski znam na poziomie komunikatywnym ze słownictwem technicznym.',
    image: jezykiIcon,
  },
  {
    id: 2,
    title: 'Pasje',
    discription: 'Moje pasje to również motoryzacja i gry komputerowe.',
    image: pasjeIcon,
  },
];

const AboutMe = () => (
  <BackgroundSection BgCol={theme.colors.AdditionalColorSection}>
    <WrapperContent>
      <TitleBox>O mnie</TitleBox>
      <BackgroundDiv className="StyleBox" Bgblack>
        <AddImager className="ImagePaweł" icons={MeIcon} width="200px" height="280px" margin="10px" />

        {DataAboutMe.map((item) => (
          <WrapperElement>
            <div className="titleBoxInAboutMe">
              <AddImager icons={item.image} width="65px" height="65px" />
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
