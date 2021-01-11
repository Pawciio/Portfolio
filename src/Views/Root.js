import React from "react";
import GlobalStyle from "../Theme/GlobalStyle";
import { theme } from "../Theme/MineStyle";
import { ThemeProvider } from "styled-components";

function Root() {
  return (
    
     <>
     <GlobalStyle />
     <ThemeProvider theme={theme}>
      <h1>Hello world</h1>
     </ThemeProvider>
   </>
  );
}

export default Root;
