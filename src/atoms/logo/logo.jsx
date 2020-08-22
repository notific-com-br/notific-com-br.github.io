import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './logo.styles';

export const Logo = (props) => {
  const classes = useStyles();
  return (
    <img className={classes.root} src="/images/notific-logotipo.svg" alt="" />
  );
};
