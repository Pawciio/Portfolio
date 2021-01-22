import styled from 'styled-components';

const Button = styled.a`
  padding: 1.2em;
  border: ${({ theme }) => `3px solid ${theme.colors.AdditionalColorSection}`};
  background: ${({ theme, BgCol }) => (BgCol ? theme.colors.AdditionalColorSection : 'transparent')};
  color: ${({ theme, Color }) => (Color ? theme.colors.AdditionalColorSection : 'black')};
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  margin: 0 1em 1em 0;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: ${({ BgCol, theme }) => (BgCol ? 'black' : theme.colors.AdditionalColorSection)};
    transition: all 0.3s;
    z-index: -1;
  }
  &:hover {
    color: ${({ Color, theme }) => (Color ? 'black' : theme.colors.AdditionalColorSection)};
    &:before {
      width: 100%;
    }
  }
`;

export default Button;
