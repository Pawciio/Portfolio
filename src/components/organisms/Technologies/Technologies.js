import React from "react";
import styled from "styled-components";

import BackgroundSection from "../../atoms/BackgroundSection/BackgroundSection";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import BoxElement from "../../atoms/BoxElement/BoxElement";
import AddImager from "../../atoms/AddImager/AddImager";

import LearnBg from "../../../assets/Technologies/componentBackCZegoUcz.png";
import IKnowBg from "../../../assets/Technologies/componentBackCoJuzUm.png";
import ToolsBg from "../../../assets/Technologies/componentBackNarze.png";
import LearnIcon from "../../../assets/Technologies/techCzegoUcze.png";
import IKnowIcon from "../../../assets/Technologies/techCoJuzUm.png";
import ToolsIcon from "../../../assets/Technologies/techNarzedzia.png";

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
    display: flex;
    flex-direction: column;
    padding: 0 4em;
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
      font-size: 20px;
    }
    .scaleIcons {
      transform: scale(0.6);
      margin: 1em 1em;
    }
  }
`;

const DataTechnologies = [
  {
    key: 0,
    title: "Czego się uczę",
    stackList: ["NodeJs, ", "Angular, ", "TypeScript "],
    bgImage: LearnBg,
    iconImage: LearnIcon,
  },
  {
    key: 1,
    title: "Co już umiem",
    stackList: ["Html, ", "Css/Scss, ", "Javascript, ", "Bootstrap 4, ", "React, ", "Redux, ", "Sql "],
    bgImage: IKnowBg,
    iconImage: IKnowIcon,
  },
  {
    key: 2,
    title: "Narzędzia",
    stackList: ["VS Code, ", "Npm/Yarn, ", "Webpack, ", "Figma, ", "Xampp "],
    bgImage: ToolsBg,
    iconImage: ToolsIcon,
  },
];

const Technologies = () => (
  <BackgroundSection Padding="5em 0" BgCol="black">
    <BanerTitle>
      <Paragraph WhiteCol>Poznane Technologie</Paragraph>
    </BanerTitle>
    <WrapperElement>
      {DataTechnologies.map((item) => (
        <BoxElement key={item.key} icons={item.bgImage}>
          <FlexBox>
            <AddImager className="scaleIcons" icons={item.iconImage} width="80px" height="80px" margin="2em 3em" />
            <Paragraph secondary WhiteCol Uppercase>
              {item.title}
            </Paragraph>
          </FlexBox>
          <ul>{item.stackList}</ul>
        </BoxElement>
      ))}
    </WrapperElement>
  </BackgroundSection>
);

export default Technologies;
