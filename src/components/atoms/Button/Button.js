import styled from 'styled-components';

const Button = styled.button`
  padding: 1.2em;
  border: ${({ theme }) => `3px solid ${theme.colors.AdditionalColorSection}`};
  background: ${({ theme, BgCol }) => (BgCol ? theme.colors.AdditionalColorSection : 'transparent')};
  color: ${({ theme, Color }) => (Color ? theme.colors.AdditionalColorSection : null)};
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  margin: 4em 1em 1em 0;
  cursor: pointer;
`;

export default Button;
