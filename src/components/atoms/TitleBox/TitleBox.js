import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  max-width: 420px;
  padding: 10px 25px;
  background: ${({ theme, name }) => (name ? theme.colors.PaddingOrangeName : theme.colors.PaddingOrangeOtherTitle)};
  color: white;
  text-align: center;
  font-size: ${({ name }) => (name ? "36px" : "24px")};
  text-transform: ${({ Upper }) => (Upper ? "uppercase" : null)};

  @media ${({ theme }) => theme.mediaQueries.xs} {
    max-width: 265px;
    padding: 8px 15px;
    p {
      font-size: ${({ name }) => (name ? "26px" : "20px")};
    }
  }
`;

const TitleBox = ({ children, Name }) => (
  <>
    {Name ? (
      <Wrapper name>
        <p>{children}</p>
      </Wrapper>
    ) : (
      <Wrapper Upper>
        <p>{children}</p>
      </Wrapper>
    )}
  </>
);

TitleBox.propTypes = {
  children: PropTypes.string,
  Name: PropTypes.string,
};

export default TitleBox;
