import styled from "styled-components";

const BoxElement = styled.div`
  background-image: url(${({ icons }) => icons});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  width: 380px;
  height: 450px;
  margin: 0 2em;

  @media ${({ theme }) => theme.mediaQueries.xs} {
    margin: 2em;
  }
`;

export default BoxElement;
