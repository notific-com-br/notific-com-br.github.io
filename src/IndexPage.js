import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Container, Box, Typography } from '@material-ui/core';
import VideoAbertura from './abertura.mp4';
import BannerCovid from './covid.gif';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  grid: {
    minHeight: '90vh',
  },
  cardImage: {
    height: '400px',
    minHeight: '18vh',
  },
  cardBody: {
    minHeight: '350px',
  },
}));

export default function IndexPage() {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Grid
        className={classes.grid}
        spacing={0}
        direction="column"
        justify="center"
        alignItems="center"
        container
      >
        <Grid xs={12} sm={12} item>
          <Link to="/covid">
            <img
              width="100%"
              alt="Banner com link para informacoes sobre covid19"
              src={BannerCovid}
            />
          </Link>
        </Grid>
        <Grid xs={12} sm={12} item>
          <video autoPlay playsInline muted width="100%">
            <source src={VideoAbertura} type="video/mp4" />
          </video>
        </Grid>
        <Grid xs={12} sm={12} item>
          <Box p={2}>
            <Typography align="center" variant="h5" color="primary">
              <Link href="/#/about" color="secondary">
                Quem somos
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
