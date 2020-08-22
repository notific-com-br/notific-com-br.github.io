import React from 'react';
import { useStyles } from './jumbotron.style';

export function Jumbotron({ path, altDesc }) {
  const classes = useStyles();
  return <img className={classes.root} src={path} alt={altDesc} />;
}
