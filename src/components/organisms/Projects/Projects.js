import React from "react";
import styled from "styled-components";

import BackgroundSection from "../../atoms/BackgroundSection/BackgroundSection";
import TitleBox from "../../atoms/TitleBox/TitleBox";
import AddImgProj from "../../atoms/AddImager/AddImgProj";
import ContentBox from "../../atoms/ContentBox/ContentBox";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Button from "../../atoms/Button/Button";

import SingleIcon from "../../../assets/TestImage.png";

const WrapperProjectsBox = styled.div`
  display: flex;
  flex-direction: column;

  .positionStyledContent:nth-child(even) {
    margin: 5.5em 0;
    flex-direction: row-reverse;
    align-self: flex-end;

    .positionStyledElementEven {
      display: flex;
      flex-direction: column;
    }

    .positionStyledButtonBox {
      flex-direction: row-reverse;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.sm} {
    p {
      font-size: 18px;
    }
  }
`;

const WrapperElement = styled.div`
  max-width: 515px;
  /* margin: 0 3em; */
`;

const WrapperButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 4em;

  @media ${({ theme }) => theme.mediaQueries.sm} {
    a {
      padding: 1em;
      font-size: 16px;
    }
  }
`;

const DataTab = [
  {
    key: 0,
    Title: "Paul Coder",
    disc: "lorem ipsum et ament ble ble itd ble loremowe blee ipsumowo fe fe",
    image: SingleIcon,
    hrefVisit: "https://paulcoder.netlify.app/",
    hrefGithub: "https://github.com/Pawciio/PaulCoder",
  },
  {
    key: 1,
    Title: "Pretty Woman - Hair salon",
    disc: "lorem ipsum et ament ble ble itd ble loremowe blee ipsumowo fe fe",
    image: SingleIcon,
    hrefVisit: "https://pretty-woman.netlify.app/",
    hrefGithub: "https://github.com/Pawciio/Paul-VisitingPage",
  },
  {
    key: 2,
    Title: "I-community",
    disc: "lorem ipsum et ament ble ble itd ble loremowe blee ipsumowo fe fe",
    image: SingleIcon,
    hrefVisit: "https://i-community.netlify.app/",
    hrefGithub: "https://github.com/Pawciio/Paul-iCommunity",
  },
];

const Projects = () => (
  <BackgroundSection BgCol="white" Padding="6em 0">
    <TitleBox>Zrealizowane Projekty</TitleBox>
    <WrapperProjectsBox>
      {DataTab.map((item) => (
        <ContentBox key={item.key} className="positionStyledContent" secondary Bgblack>
          <AddImgProj src={item.image} />
          <WrapperElement className="positionStyledElementEven">
            <Paragraph secondary WhiteCol Padding="1em 0">
              {item.Title}
            </Paragraph>
            <Paragraph WhiteCol>{item.disc}</Paragraph>
            <WrapperButton className="positionStyledButtonBox">
              <Button href={item.hrefVisit} target="_blank" Color>
                Wyświetl stronę
              </Button>
              <Button href={item.hrefGithub} target="_blank" BgCol>
                Kod źródłowy
              </Button>
            </WrapperButton>
          </WrapperElement>
        </ContentBox>
      ))}
    </WrapperProjectsBox>
  </BackgroundSection>
);

export default Projects;
