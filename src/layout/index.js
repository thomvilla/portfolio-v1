import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

// Define what props.theme will look like
const themeSettings = {
  main: 'mediumseagreen',
};

const Layout = ({ children }) => (
    <ThemeProvider theme={themeSettings}>
      {children()}
    </ThemeProvider>
  );
  
  export default Layout;