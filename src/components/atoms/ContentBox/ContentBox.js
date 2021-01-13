import styled from 'styled-components';

const BackgroundDiv = styled.div`
  background-color: ${({ theme }) => theme.AdditionalColorSection};
  width: 85vw;
  padding: 4em 2em;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export default BackgroundDiv;
