import React from "react";
import styled from "styled-components";

import BackgroundSection from "../../atoms/BackgroundSection/BackgroundSection";
import TitleBox from "../../atoms/TitleBox/TitleBox";
import AddImgProj from "../../atoms/AddImager/AddImgProj";
import ContentBox from "../../atoms/ContentBox/ContentBox";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Button from "../../atoms/Button/Button";

import PaulCoderIcon from "../../../assets/Portfolio/paul.png";
import iCommunityIcon from "../../../assets/Portfolio/comm.png";
import PreattyWomanIcon from "../../../assets/Portfolio/prete.png";
import CookieClicker from "../../../assets/Portfolio/CookieClicker.png";
import ToDoList from "../../../assets/Portfolio/ToDoList.png";
import RockPaperScissors from "../../../assets/Portfolio/RockPapaer.png";

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
  .TitleProjects {
    font-size: 28px;
  }

  @media ${({ theme }) => theme.mediaQueries.sm} {
    .TitleProjects {
      font-size: 24px;
    }
  }
`;

const WrapperButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 4em;
  justify-content: flex-end;

  @media ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: center;
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
    image: PaulCoderIcon,
    hrefVisit: "https://paulcoder.netlify.app/",
    hrefGithub: "https://github.com/Pawciio/PaulCoder",
  },
  {
    key: 1,
    Title: "Pretty Woman - Hair salon",
    disc: "lorem ipsum et ament ble ble itd ble loremowe blee ipsumowo fe fe",
    image: PreattyWomanIcon,
    hrefVisit: "https://pretty-woman.netlify.app/",
    hrefGithub: "https://github.com/Pawciio/Paul-VisitingPage",
  },
  {
    key: 2,
    Title: "I-community",
    disc: "lorem ipsum et ament ble ble itd ble loremowe blee ipsumowo fe fe",
    image: iCommunityIcon,
    hrefVisit: "https://i-community.netlify.app/",
    hrefGithub: "https://github.com/Pawciio/Paul-iCommunity",
  },
  {
    key: 3,
    Title: "Todo List",
    disc: "Old Project. lorem ipsum et ament ble ble itd ble loremowe blee ipsumowo fe fe",
    image: ToDoList,
    hrefVisit: "https://pawciio.github.io/Todo-list",
    hrefGithub: "https://github.com/Pawciio/Todo-list",
  },
  {
    key: 4,
    Title: "Cookie Clicker",
    disc: "Old Project. lorem ipsum et ament ble ble itd ble loremowe blee ipsumowo fe fe",
    image: CookieClicker,
    hrefVisit: "https://pawciio.github.io/Cookie-clicker",
    hrefGithub: "https://github.com/Pawciio/Cookie-clicker",
  },
  {
    key: 5,
    Title: "Rock Paper Scissors",
    disc: "Old Project. lorem ipsum et ament ble ble itd ble loremowe blee ipsumowo fe fe",
    image: RockPaperScissors,
    hrefVisit: "https://pawciio.github.io/Rock_Paper_Scissors",
    hrefGithub: "https://github.com/Pawciio/Rock_Paper_Scissors",
  },
];

const Projects = () => (
  <BackgroundSection id="Projects" BgCol="white" Padding="6em 0">
    <TitleBox>Zrealizowane Projekty</TitleBox>
    <WrapperProjectsBox>
      {DataTab.map((item) => (
        <ContentBox key={item.key} className="positionStyledContent" secondary Bgblack>
          <AddImgProj src={item.image} />
          <WrapperElement className="positionStyledElementEven">
            <Paragraph className="TitleProjects" secondary WhiteCol Padding="1em 0">
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
