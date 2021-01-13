import styled from 'styled-components';

const Paragraph = styled.p`
  margin: 0;
  font-size: 24px;
  text-transform: ${({ Uppercase }) => (Uppercase ? 'uppercase' : null)};
  display: flex;
  align-items: center;
`;

export default Paragraph;
