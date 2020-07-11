import React from 'react';

import {Grid, Container, Box, Typography, Link} from '@material-ui/core'
import VideoAbertura from './abertura.mp4';

import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  grid: {
    minHeight: "90vh",
  },
  cardImage: {
    height: "400px",
    minHeight: "18vh",
  },
  cardBody: {
    minHeight: "350px",
  }
}));


export default function IndexPage() {
  const classes = useStyles();
  return (
    <Container maxWidth='md'>
      <Grid
        className={classes.grid}
        spacing={0}
        direction="column"
        justify="center"
        alignItems="center"
        container
      >
        <Grid xs={12} sm={12} item>
          <video autoPlay playsInline muted width='100%'>
            <source src={VideoAbertura} type='video/mp4' />
          </video>
        </Grid>
        <Grid xs={12} sm={12} item>
          <Box p={2}>
            <Typography align='center' variant='h5' color='primary'>
              Clique&nbsp;
                <Link href='/#/about' color='secondary'>
                aqui
                </Link>
                &nbsp;para saber quem somos.
              </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
