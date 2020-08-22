import React from 'react';
import { useStyles } from './menu.styles';
import { Link } from '@material-ui/core';

export const PrimaryMenu = () => {
  const classes = useStyles();
  return (
    <ul className={classes.root}>
      <li className={classes.item}>
        <Link href="/blog">blog</Link>
      </li>
      <li className={classes.item}>
        <Link className={classes.link} href="/sobre-nos">
          sobre nós
        </Link>
      </li>
      <li className={classes.item}>
        <Link className={classes.link} href="/covid">
          portal covid
        </Link>
      </li>
      <li className={classes.item}>podcast</li>
      <li className={classes.item}>vídeos</li>
      <li className={classes.item}>contato</li>
    </ul>
  );
};
