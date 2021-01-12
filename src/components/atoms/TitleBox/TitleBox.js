import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 420px;
    padding: 10px 25px;
    background: ${({ theme, name }) => (name ? theme.PaddingOrangeName : theme.PaddingOrangeOtherTitle)};
    color: white;
    text-align: center;
    font-size: ${({ name }) => (name ? '36px' : '24px')};
`;

const TitleBox = ({children, Name}) => (
    <> {Name ? (
    <Wrapper name>
        <p>
            {children}
        </p>
    </Wrapper>
    ) : (
    <Wrapper>
        <p>
            {children}
        </p>
    </Wrapper>
    ) }
    </>
);

export default TitleBox