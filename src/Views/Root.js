import React from 'react';
import GlobalStyle from '../Theme/GlobalStyle';
import { theme } from '../Theme/MineStyle';
import { ThemeProvider } from 'styled-components';

import Header from '../components/organisms/Header/Header';
import AboutMe from '../components/organisms/AboutMe/AboutMe';
import Technologies from '../components/organisms/Technologies/Technologies';
import Projects from '../components/organisms/Projects/Projects';

function Root() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <AboutMe />
        <Technologies />
        <Projects />
      </ThemeProvider>
    </>
  );
}

export default Root;
