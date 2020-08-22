import React from 'react';
import { Link } from '@material-ui/core';
import { useStyles } from './logo.styles';

export const Logo = (props) => {
  const classes = useStyles();
  return (
    <Link href="/">
      <img className={classes.root} src="/images/notific-logotipo.svg" alt="" />
    </Link>
  );
};
