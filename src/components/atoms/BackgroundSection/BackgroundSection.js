import styled from 'styled-components';

const Background = styled.section`
  background: ${({ BgCol }) => BgCol};
  background-image: url(${({ Background }) => Background});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  padding: ${({ Padding }) => Padding};
`;

export default Background;
