import React from 'react';
import styled from 'styled-components';
import Background from '../../atoms/BackgroundSection/BackgroundSection'
import BackgroundHeader from '../../../assets/BackgroundHeader/BackgroundHeader.png'

const WrapperElement = styled.div`
    height: 1500px; // test height
`;

const Header = () => (
    <Background Background={BackgroundHeader} >
      <WrapperElement>
        
      </WrapperElement>
    </Background>
);

export default Header;  