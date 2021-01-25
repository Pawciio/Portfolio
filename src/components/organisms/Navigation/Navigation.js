import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 7em;
  right: 20px;

  .active {
    transform: rotate(0);
    box-shadow: none;

    &::before {
      content: '';
      width: 120px;
      height: 45px;
      background: white;
      position: absolute;
      top: -3px;
      right: -3px;
      border: 3px solid ${({ theme }) => theme.colors.ColorInContactBox};
      transform: rotate(0);
      box-shadow: 5px 5px 5px black;
    }
  }
`;

const BoxItem = styled.div`
  width: 45px;
  height: 45px;
  margin: 2em 1em;
  border: 3px solid ${({ theme }) => theme.colors.ColorInContactBox};
  transform: rotate(45deg);
  box-shadow: 5px 5px 5px black;
  transition: all 0.5s;
`;

const Navigation = () => (
  <Wrapper>
    <BoxItem id="Start" className="active" />
    <BoxItem id="Omnie" />
    <BoxItem id="Technologie" />
    <BoxItem id="Projekty" />
    <BoxItem id="Contact" />
  </Wrapper>
);

export default Navigation;
