import React from 'react';
import { useStyles } from './footer.styles';

export function Footer() {
  const classes = useStyles();

  return <footer className={classes.root}>Footer</footer>;
}
