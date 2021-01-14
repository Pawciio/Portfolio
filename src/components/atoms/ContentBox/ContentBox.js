import styled from 'styled-components';

const BackgroundDiv = styled.div`
  background-color: ${({ theme, Bgblack }) => (Bgblack ? 'black' : theme.colors.AdditionalColorSection)};
  width: 85vw;
  padding: 4em 2em;
  display: flex;
  justify-content: center;
  text-align: center;

  @media ${({ theme }) => theme.mediaQueries.sm} {
    width: 100vw;
  }
`;

export default BackgroundDiv;
