import styled from 'styled-components';

const ButtonContact = styled.button`
  padding: 0.8em 1.8em;
  margin-top: 2em;
  border: 3px solid ${({ theme }) => theme.colors.ColorInContactBox};
  font-size: 20px;
  background: white;
  letter-spacing: 0.2em;
  color: ${({ theme }) => theme.colors.ColorInContactBox};
  cursor: pointer;
  &:focus {
    outline: none;
  }

  display: inline-block;
  text-transform: uppercase;
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
    background-color: ${({ theme }) => theme.colors.ColorInContactBox};
    transition: all 0.3s;
    z-index: -1;
  }
  &:hover {
    color: #fff;
    &:before {
      width: 100%;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.sm} {
    padding: 0.5em 1.2em;
    font-size: 18px;
  }
  @media ${({ theme }) => theme.mediaQueries.xs} {
    font-size: 16px;
  }
`;

export default ButtonContact;
