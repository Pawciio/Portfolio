import React from "react";
import styled from "styled-components";

import BackgroundSection from "../../atoms/BackgroundSection/BackgroundSection";
import TitleBox from "../../atoms/TitleBox/TitleBox";
import AddImgProj from "../../atoms/AddImager/AddImgProj";
import ContentBox from "../../atoms/ContentBox/ContentBox";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Button from "../../atoms/Button/Button";

import DataTab from "./DataProjects.json";

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

const Projects = () => {

  const DataTabToMap = DataTab.DataTab;

  const setImage = (imageFromData) => {
    switch (imageFromData) {

      case "PaulCoderIcon":
        return PaulCoderIcon;

      case "iCommunityIcon":
        return iCommunityIcon;

      case "PreattyWomanIcon":
        return PreattyWomanIcon;

      case "CookieClicker":
        return CookieClicker;

      case "ToDoList":
        return ToDoList;

      case "RockPaperScissors":
        return RockPaperScissors;
    }
  };

  return (
    <BackgroundSection id="Projects" BgCol="white" Padding="6em 0">
      <TitleBox>Zrealizowane Projekty</TitleBox>
      <WrapperProjectsBox>
        {DataTabToMap.map((item) => (
          <ContentBox key={item.key} className="positionStyledContent" secondary Bgblack>
            <AddImgProj src={setImage(item.image)} />
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
};
export default Projects;
