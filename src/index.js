import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import {Grid, Typography, Link, Box} from '@material-ui/core';
import { makeStyles, ThemeProvider, createMuiTheme} from "@material-ui/core/styles"

import VideoAbertura from './abertura.mp4';

const useStyles = makeStyles((theme) => ({
  grid: {
    minHeight: "90vh",
  },
}));


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
});
export default function GridSite() {
  const classes = useStyles();
  return (
      <Grid
        className={classes.grid}
        spacing={2}
        direction="column"
        justify="center"
        alignItems="center"
        container
      >
        <Grid xs={12} sm={12} item>
            <Box p={2}>
            <video autoPlay playsInline muted width='100%'>
              <source src={VideoAbertura} type='video/mp4' />
            </video>
            </Box>
        </Grid>
        <Grid xs={12} sm={12} item>
            <Box p={2}>
            <Typography align='center' variant='h4' color='primary'>
              Clique&nbsp;
              <Link href='#' color='secondary'>
                aqui
              </Link> 
              &nbsp;para saber quem somos.
            </Typography>
            </Box>
        </Grid>
      </Grid>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GridSite />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
