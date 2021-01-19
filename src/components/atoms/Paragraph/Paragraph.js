import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  margin: 0;
  font-size: 24px;
  text-transform: ${({ Uppercase }) => (Uppercase ? 'uppercase' : null)};
  display: flex;
  align-items: center;
  color: ${({ WhiteCol }) => (WhiteCol ? 'White' : null)};

  ${({ secondary }) =>
    secondary &&
    css`
      font-size: 26px;
      padding: ${({ Padding }) => Padding};
    `}
`;

export default Paragraph;
