import React from 'react';
import { useStyles } from './footer.styles';
import { Container, Grid, Link } from '@material-ui/core';
import { Facebook, Instagram, Twitter, YouTube } from '@material-ui/icons';

export function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container>
        <Grid
          xs={12}
          direction="column"
          alignItems="center"
          justify="center"
          container
        >
          <Grid className={classes.gridItem} xs={12}>
            NOS ACOMPANHE NAS REDES
          </Grid>
          <Grid className={classes.gridItem} xs={12}>
            <Link
              className={classes.link}
              href="https://www.facebook.com/notific.com.br"
              rel="nofollow noopenner"
              target="_blank"
            >
              <Facebook />
            </Link>
            <Link
              className={classes.link}
              href="https://www.instagram.com/notific_/"
              rel="nofollow noopenner"
              target="_blank"
            >
              <Instagram />
            </Link>
            <Link
              className={classes.link}
              href="https://twitter.com/Notific_"
              rel="nofollow noopenner"
              target="_blank"
            >
              <Twitter />
            </Link>
            <Link
              className={classes.link}
              href="https://www.youtube.com/channel/UCNr3E3-wYuFndkTirNpCfSA"
              rel="nofollow noopenner"
              target="_blank"
            >
              <YouTube />
            </Link>
          </Grid>
          <Grid className={classes.gridItem} xs={12}>
            <div className={classes.copyright}>
              <img
                className={classes.logotipo}
                src="/images/notific-logotipo-negativa.svg"
                alt="Logotipo Notific na cor branca"
              />
              <span> | TODOS OS DIREITOS RESERVADOS</span>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
