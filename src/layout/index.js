import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';
import Header from "../components/Header"

// define background colours for `mode` theme
const backgroundColor = theme('mode', {
  light: '#fafafa',
  dark: '#222'
});

// define text color for `mode` theme
const textColor = theme('mode', {
  light: '#000',
  dark: '#fff'
});

// apply theming to a styled component
const Main = styled.div`
  background-color: ${backgroundColor};
  color: ${textColor}
`;

const WrapperHeader = styled.div`
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={{ mode: 'light' }}>
    <Main>
      <Header/>
      {children}
      <footer> © {new Date().getFullYear()} </footer>
    </Main>
  </ThemeProvider>
  );
  
  export default Layout;