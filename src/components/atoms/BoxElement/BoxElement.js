import styled from 'styled-components';

const BoxElement = styled.div`
  background-image: url(${({ icons }) => icons});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  width: 480px;
  height: 500px;
  margin: 0 2em;
`;

export default BoxElement;
