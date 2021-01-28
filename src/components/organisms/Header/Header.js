import React from "react";
import styled, { keyframes } from "styled-components";
import Background from "../../atoms/BackgroundSection/BackgroundSection";
import BackgroundHeader from "../../../assets/BackgroundHeader/BackgroundHeader.png";
import ContentHeaderBox from "../../molecules/ContentHeaderBox/ContentHeaderBox";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import AddImager from "../../atoms/AddImager/AddImager";
import Vicon from "../../../assets/Other-DetailImage/Vimage.png";

const slideDown = keyframes`
  0% {
    opacity: 0;
    top: -20px;
  }

  50%{
    opacity: 1;
  }

  100% {
    opacity: 0;
    top: 25px;
  }
`;

const WrapperElement = styled.div`
  padding-top: 15em;
  height: 100vh;
  max-height: 1100px;
  position: relative;

  @media ${({ theme }) => theme.mediaQueries.xs} {
    height: 575px;
    padding-top: 5em;
  }
`;

const Baner = styled.div`
  background: ${({ theme }) => theme.colors.BlackOpacity};
  padding: 1em;
  color: white;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .Vicon {
    position: relative;
    animation: ${slideDown} 2s ease-in-out infinite;
  }

  @media ${({ theme }) => theme.mediaQueries.xs} {
    padding: 0.5em;
    p {
      font-size: 20px;
    }
    .Vicon {
      transform: scale(0.8);
    }
  }
`;

const Header = () => (
  <Background Background={BackgroundHeader}>
    <WrapperElement>
      <ContentHeaderBox />
      <Baner>
        <Paragraph Uppercase>Poznaj Mnie</Paragraph>
        <AddImager className="Vicon" icons={Vicon} width="53px" height="42px" margin="8px" />
      </Baner>
    </WrapperElement>
  </Background>
);

export default Header;
