import React from 'react';
import styled from 'styled-components';
import Background from '../../atoms/BackgroundSection/BackgroundSection'
import BackgroundHeader from '../../../assets/BackgroundHeader/BackgroundHeader.png'
import TitleBox from '../../atoms/TitleBox/TitleBox'

const WrapperElement = styled.div`
    height: 1500px; // test height
`;

const Header = () => (
    <Background Background={BackgroundHeader} >
      <WrapperElement>
      <TitleBox Name >
        Paweł Chołda
      </TitleBox> 
      </WrapperElement>
    </Background>
);

export default Header;  