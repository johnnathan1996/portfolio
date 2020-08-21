import React from 'react';
import { Header } from './components/header';
import { About } from './components/about';
import { Works } from './components/works';
import { Contact } from './components/contact';
import './global.css'

import {ThemeProvider} from 'styled-components'

const theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 0, // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76  // rem
    },
    breakpoints: {
      xs: 0,  // em
      sm: 48, // em
      md: 64, // em
      lg: 75  // em
    }
  }
}


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Header />
    <About />
    <Works />
    <Contact />
    </ThemeProvider>
  );
}

export default App;
