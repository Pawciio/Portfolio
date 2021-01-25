import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 7em;
  right: 20px;

  .active {
    background: white;
    transform: rotate(0);
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
    <BoxItem className="active" />
    <BoxItem />
    <BoxItem />
    <BoxItem />
    <BoxItem />
  </Wrapper>
);

export default Navigation;
