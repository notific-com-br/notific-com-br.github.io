import React from 'react';
import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  useTheme,
  Container,
} from '@material-ui/core';

// TODO: Move this to a header.component.style.js file
const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  title: { color: theme.palette.primary.main },
  toolbar: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  logotipo: {
    marginRight: 8,
  },
}));

export function Header({ title }) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <AppBar color="default" position="fixed">
        <Container disableGutters>
          <Toolbar className={theme.breakpoints.up('md') && classes.toolbar}>
            <img
              width="120"
              className={classes.logotipo}
              src={`${process.env.PUBLIC_URL}/images/notific-logotipo.svg`}
              alt="Notific Logotipo"
            />
            {'  '}
            <Typography className={classes.title}> | {title}</Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <div className={classes.offset} />
    </>
  );
}
