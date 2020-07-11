import React from 'react';

import {
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Link,
} from '@material-ui/core'

import {makeStyles} from '@material-ui/core/styles'

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
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

export default function AboutUsPage() {
  const classes = useStyles();
  return (
    <Container maxWidth='lg'>
      <Grid
        className={classes.grid}
        spacing={2}
        direction="row"
        justify="center"
        alignItems="stretch"
        container
      >
        <Grid xs={12} lg={4} item>
          <Card>
            <CardMedia
              className={classes.cardImage}
              image={process.env.PUBLIC_URL + '/anniel.jpg'}
              title="Anniel Menezes Cruz"
            />
            <CardContent className={classes.cardBody}>
              <Typography gutterBottom variant="h5">
                Anniel Menezes Cruz
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
              <Link target='_blank' href="https://www.linkedin.com/in/annielmenezes/" >
                <LinkedInIcon />
              </Link>
              <Link target='_blank' href="https://github.com/annielmenezes/">
                <GitIcon />
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={12} lg={4} item>
          <Card>
            <CardMedia
              className={classes.cardImage}
              image={process.env.PUBLIC_URL + '/caio.jpeg'}
              title="Caio Adam Cardoso"
            />
            <CardContent className={classes.cardBody}>
              <Typography gutterBottom variant="h5">
                Caio Adam Cardozo
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
              <Link target='_blank' href="https://facebook.com/profile.php?id=1829885651" >
                <FacebookIcon />
              </Link>
              <Link target='_blank' href="http://www.instagram.com/caioadam_">
                <InstagramIcon />
              </Link>
              <Link target='_blank' href="https://br.linkedin.com/in/caio-adam-cardozo-29421268" >
                <LinkedInIcon />
              </Link>
              <Link target='_blank' href="https://github.com/caioadam">
                <GitIcon />
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={12} lg={4} item>
          <Card>
            <CardMedia
              className={classes.cardImage}
              image={process.env.PUBLIC_URL + '/el.jpg'}
              title="Jesiel Damacena Filho"
            />
            <CardContent className={classes.cardBody}>
              <Typography gutterBottom variant="h5">
                Jesiel Damacena Filho
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
              <Link target='_blank' href="https://www.facebook.com/el.damacena" >
                <FacebookIcon />
              </Link>
              <Link target='_blank' href="http://www.instagram.com/eldamacena">
                <InstagramIcon />
              </Link>
              <Link href="mailto:eldamacena@hotmail.com">
                <EmailIcon />
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={12} lg={4} item>
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
              <Link target='_blank' href="https://github.com/gcgbarbosa">
                <GitIcon />
              </Link>
              <Link target='_blank' href="https://www.linkedin.com/in/gcgbarbosa/">
                <LinkedInIcon />
              </Link>
              <Link target='_blank' href="http://www.instagram.com/gcgbarbosa">
                <InstagramIcon />
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={12} lg={4} item>
          <Card>
            <CardMedia
              className={classes.cardImage}
              image={process.env.PUBLIC_URL + '/paulo.jpg'}
              title="Paulo L. L. Nascimento Paixao"
            />
            <CardContent className={classes.cardBody}>
              <Typography gutterBottom variant="h5">
                Paulo L. L. N. Paixão
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
              <Link href="https://instagram.com/paulolaerciopaixao">
                <InstagramIcon />
              </Link>
              <Link href="https://www.facebook.com/paulo.paixao.12">
                <FacebookIcon />
              </Link>
              <Link href="mailto:paulolaerciopaixao@gmail.com">
                <EmailIcon />
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
