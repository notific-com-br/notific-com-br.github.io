import React from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter} from "react-router-dom"

import * as serviceWorker from './serviceWorker';

import {ThemeProvider, createMuiTheme} from "@material-ui/core/styles"

import AboutUsPage from './AboutUsPage'
import IndexPage from './IndexPage'
import CovidPage from './CovidPage'

// primary: '#19F59F',
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2568B0',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#FFCC29',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    fontSize: 18,
  }
});

ReactDOM.render(
  <HashRouter>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Route path="/covid">
          <CovidPage/>
        </Route>
        <Route path="/about">
          <AboutUsPage />
        </Route>
        <Route exact path="/" >
          <IndexPage />
        </Route>
      </ThemeProvider>
    </React.StrictMode>
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
