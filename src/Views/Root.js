import React from "react";
import GlobalStyle from "../Theme/GlobalStyle";
import { theme } from "../Theme/MineStyle";
import { ThemeProvider } from "styled-components";
import Header from '../components/organisms/Header/Header';

function Root() {
  return (
     <>
     <GlobalStyle />
     <ThemeProvider theme={theme}>
       <Header />
     </ThemeProvider>
   </>
  );
}

export default Root;
