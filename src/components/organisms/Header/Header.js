import React from 'react';
import styled from 'styled-components';
import Background from '../../atoms/BackgroundSection/BackgroundSection'
import BackgroundHeader from '../../../assets/BackgroundHeader/BackgroundHeader.png'

const Wrapper = styled.div`
    margin: 5px;
`;

const Header = () => (
    <Background Background={BackgroundHeader} >
      <h1>Hello</h1>
    </Background>
);

export default Header;