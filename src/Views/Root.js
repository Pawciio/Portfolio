import React from "react";
import GlobalStyle from "../Theme/GlobalStyle";
import { theme } from "../Theme/MineStyle";
import { ThemeProvider } from "styled-components";

import Header from "../components/organisms/Header/Header";
import AboutMe from "../components/organisms/AboutMe/AboutMe";
import Technologies from "../components/organisms/Technologies/Technologies";
import Projects from "../components/organisms/Projects/Projects";
import Contact from "../components/organisms/Contact/Contact";
import Navigation from "../components/organisms/Navigation/Navigation";

function Root() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navigation />
        <Header />
        <AboutMe />
        <Technologies />
        <Projects />
        <Contact />
      </ThemeProvider>
    </>
  );
}

export default Root;
