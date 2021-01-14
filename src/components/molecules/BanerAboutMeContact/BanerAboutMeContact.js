import React from 'react';
import styled from 'styled-components';

import AdderImage from '../../atoms/AddImager/AddImager';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import BgImageBaner from '../../../assets/AboutMe/oMnieBaner.png';
import GitImage from '../../../assets/AboutMe/oMnieGit.png';
import ContactImage from '../../../assets/AboutMe/oMnieKontakt.png';

const Wrapper = styled.div`
  background-image: url(${BgImageBaner});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;

  .bgColContener {
    padding: 1em 0;
    background-color: ${({ theme }) => theme.colors.PaddingOrangeAboutMeBaner};
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const WrapperElement = styled.div`
  margin: 0 2em;
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.mediaQueries.xs} {
    p {
      font-size: 18px;
    }
    .scalImage {
      transform: scale(0.7);
      margin: 0.1em;
    }
  }
`;

const BanerAboutMeContact = () => (
  <Wrapper>
    <div className="bgColContener">
      <WrapperElement>
        <AdderImage className="scalImage" icons={ContactImage} width="90px" height="80px" margin="1em" />
        <Paragraph WhiteCol>Skontaktuj się ze mną</Paragraph>
      </WrapperElement>
      <WrapperElement>
        <AdderImage className="scalImage" icons={GitImage} width="75px" height="70px" margin="1em" />
        <Paragraph WhiteCol>Zobacz moje projekty</Paragraph>
      </WrapperElement>
    </div>
  </Wrapper>
);

export default BanerAboutMeContact;
