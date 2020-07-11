import React from 'react';

import {
  Paper,
  Grid,
  Container,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Link,
} from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(
  (theme) => ({
    grid: {
    },
    cardImage: {
    }
  }
  )
);

export default function CovidPage() {
  const classes = useStyles();
  
  return (
    <Container maxWidth='lg'>
      testing this shit
    </Container>
  )
}

