import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import {Grid, Typography, Link, Box} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"

import VideoAbertura from './abertura.mp4';

const useStyles = makeStyles((theme) => ({
  grid: {
    minHeight: "90vh",
  },
}));

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
            <Typography align='center' variant='h4'>
              <Link href='#' >
                Quem somos? 
              </Link>
            </Typography>
            </Box>
        </Grid>
      </Grid>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <GridSite />
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
