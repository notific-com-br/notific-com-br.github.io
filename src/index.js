import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, HashRouter} from "react-router-dom"

import * as serviceWorker from './serviceWorker';

import {makeStyles, ThemeProvider, createMuiTheme} from "@material-ui/core/styles"
import {
  Grid,
  Typography,
  Link,
  Box,
  Paper,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import VideoAbertura from './abertura.mp4';

const useStyles = makeStyles((theme) => ({
  grid: {
    minHeight: "90vh",
  },
  cardImage: {
    height: "400px",
    minHeight: "25vh",
  },
  cardBody: {
    minHeight: "15vh"
  }
}));

// primary: '#19F59F',
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2568B0',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#FFCC29',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

export default function IndexPage() {
  const classes = useStyles();
  return (
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
  );
}

export function AboutPage() {
  const classes = useStyles();
  return (
    <Grid
      spacing={2}
      direction="row"
      justify="center"
      alignItems="center"
      container
    >
      <Grid xs={12} sm={4} item>
        <Card>
            <CardMedia
              className={classes.cardImage}
              image={process.env.PUBLIC_URL + '/anniel.jpg'}
              title="Anniel Menezes"
            />
            <CardContent className={classes.cardBody}>
              <Typography gutterBottom variant="h5">
                Anniel Menezes
              </Typography>
              <Typography variant="body2">
                Desenvolvedor full-stack, entusiasta de padrões da web e publicado por automação. 
                Atualmente, tenho feito malabarismos entre projetos de código aberto 
                por aí e dando vida aos PSDs nos navegadores.
                Tenho 6 anos de experiência em HTML5, CSS3 
                (incluindo Sass, Less e Stylus), 
                Javascript (jQuery, React, AngularJS e NodeJS), 
                PHP, Git, Photshop / Sketch para cortar imagens, Agile (Scrum, XP).
              </Typography>
            </CardContent>
            <CardActions>
              <Button>
                <FacebookIcon />
              </Button>
              <Button>
                <InstagramIcon/>
              </Button>
              <Button>
                <LinkedInIcon />
              </Button>
              <Button>
                <GitIcon />
              </Button>
            </CardActions>
        </Card>
      </Grid>
      <Grid xs={12} sm={4} item>
        <Card>
            <CardMedia
              className={classes.cardImage}
              image={process.env.PUBLIC_URL + '/caio.jpeg'}
              title="Caio Adam Cardozo"
            />
            <CardContent className={classes.cardBody}>
              <Typography gutterBottom variant="h5">
                Caio Adam Cardoso
              </Typography>
              <Typography variant="body2">
                Mais de 8 anos de experiência 
                em uma das maiores empresas de comunicação visual do interior da Bahia. 
                Servidor Público na prefeitura Municipal de Jequié. 
                Atualmente também colaborando com a Agência de Publicidade 1 Ponto, 
                prestando serviços Gráficos e de Motion Flyer. 
              </Typography>
            </CardContent>
            <CardActions>
              <Button>
                <FacebookIcon />
              </Button>
              <Button>
                <InstagramIcon/>
              </Button>
              <Button>
                <LinkedInIcon />
              </Button>
              <Button>
                <GitIcon />
              </Button>
            </CardActions>
        </Card>
      </Grid>
      <Grid xs={12} sm={4} item>
        <Card>
            <CardMedia
              className={classes.cardImage}
              image={process.env.PUBLIC_URL + '/el.jpg'}
              title="El Damacena"
            />
            <CardContent className={classes.cardBody}>
              <Typography gutterBottom variant="h5">
                El Damacena
              </Typography>
              <Typography variant="body2">
                Mais um dáriomeirense que ama a sua terra. 
                Filho de professores,
                estudante da rede pública,
                graduado em Economia (Ciências Econômicas) pela UESC em 2017
                e atuando como bancário desde então. 
                Deixar algum legado, 
                passar conhecimento adiante e viver a essência da vida com simplicidade
                são coisas em que busco me guiar. 
                Família, sítio e a fé são o meu refúgio. 
                Futebol, música e cavalos, são a minha diversão. 
                Costumo dizer que sou abençoado por tudo o que tenho.
              </Typography>
            </CardContent>
            <CardActions>
              <Button>
                <FacebookIcon />
              </Button>
              <Button>
                <InstagramIcon/>
              </Button>
              <Button>
                <LinkedInIcon />
              </Button>
              <Button>
                <GitIcon />
              </Button>
            </CardActions>
        </Card>
      </Grid>
      <Grid xs={12} sm={4} item>
        <Card>
            <CardMedia
              className={classes.cardImage}
              image={process.env.PUBLIC_URL + '/george.jpg'}
              title="George C. G. Barbosa"
            />
            <CardContent className={classes.cardBody}>
              <Typography gutterBottom variant="h5">
                George C. G. Barbosa
              </Typography>
              <Typography variant="body2">
                Quando criança eu entrei no curso de computacao de Kadna 
                e nunca mais parei de mexer com computador.
                Comecei a programar aos 12 anos e comecei a faculdade aos 16 anos. 
                Meu principal objetivo na vida é melhorar um pouco a cada dia. 
                Faço muitas coisas para me divertir: 
                jogar xadrez, cubo magico, tocar violão,
                desenhar, programar, fotografia, escrever em meu diário,
                tirar sarro das coisas ruins que acontecem na minha vida 
                e ligar para minha mãe.
              </Typography>
            </CardContent>
            <CardActions>
              <Button>
                <FacebookIcon />
              </Button>
              <Button>
                <InstagramIcon/>
              </Button>
              <Button>
                <LinkedInIcon />
              </Button>
              <Button>
                <GitIcon />
              </Button>
            </CardActions>
        </Card>
      </Grid>
      <Grid xs={12} sm={4} item>
        <Card>
            <CardMedia
              className={classes.cardImage}
              image={process.env.PUBLIC_URL + '/paulo.jpg'}
              title="Paulo L. L. Nascimento Paixao"
            />
            <CardContent className={classes.cardBody}>
              <Typography gutterBottom variant="h5">
                Paulo LL Nascimento Paixão
              </Typography>
              <Typography variant="body2">
                Advogado,
                formado em Direito pela UNIME-Itabuna e Pós-graduando pela Escola Superior de Advocacia da OAB,
                sempre fui apaixonado pelas discussões relevantes,
                pelo debate civilizado e o questionamento de tudo. 
                Durante minha adolescência, 
                ao estudar sobre o Iluminismo e a dúvida como "mãe do saber", 
                fiquei apaixonado e até hoje procuro exercitar a formação do conhecimento 
                através do questionamento de tudo. 
                Em síntese, um cara chato que duvida de tudo mas adora uma boa discussão.
              </Typography>
            </CardContent>
            <CardActions>
              <Button>
                <FacebookIcon />
              </Button>
              <Button>
                <InstagramIcon/>
              </Button>
              <Button>
                <LinkedInIcon />
              </Button>
              <Button>
                <GitIcon />
              </Button>
            </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

ReactDOM.render(
  <HashRouter>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/" >
          <IndexPage />
        </Route>
      </ThemeProvider>
    </React.StrictMode>
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
