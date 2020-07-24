import React from 'react';
import {Container, Grid, Box, Link, Typography, Breadcrumbs} from '@material-ui/core';
import {UserCard} from './components/user-card/user-card.component';
import {Header} from './components/header/header.component';


export default function AboutUsPage() {
  return (
    <Container maxWidth="lg">
      <Header title="PORTAL COVID-19" />
      <Box my={2}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Inicio
          </Link>
          <Typography color="textPrimary">Sobre nós </Typography>
        </Breadcrumbs>
      </Box>
      <Box>
        <Grid
          spacing={2}
          direction="row"
          justify="center"
          alignItems="stretch"
          container
        >
          <UserCard
            about="Desenvolvedor full-stack, entusiasta de padrões da web e
                  publicado por automação. Atualmente, tenho feito malabarismos
                  entre projetos de código aberto por aí e dando vida aos PSDs
                  nos navegadores. Tenho 6 anos de experiência em HTML5, CSS3
                  (incluindo Sass, Less e Stylus), Javascript (jQuery, React,
                  AngularJS e NodeJS), PHP, Git, Photshop / Sketch para cortar
                  imagens, Agile (Scrum, XP)."
            image={process.env.PUBLIC_URL + '/images/profile/anniel.jpg'}
            name="Anniel Menezes Cruz"
            profiles={{
              email: 'mailto:contato@annielmenezes.com',
              facebook: 'https://facebook.com/annielmenezes',
              github: 'https://github.com/annielmenezes/',
              instagram: 'https://instagram.com/annielmenezes',
              linkedin: 'https://www.linkedin.com/in/annielmenezes/',
            }}
          />
          <UserCard
            about="Mais de 8 anos de experiência em uma das maiores empresas de
                  comunicação visual do interior da Bahia. Servidor Público na
                  prefeitura Municipal de Jequié. Atualmente também colaborando
                  com a Agência de Publicidade 1 Ponto, prestando serviços
                  Gráficos e de Motion Flyer."
            image={process.env.PUBLIC_URL + '/images/profile/caio.jpeg'}
            name="Caio Adam Cardoso"
            profiles={{
              facebook: 'https://facebook.com/profile.php?id=1829885651',
              github: 'https://github.com/caioadam/',
              instagram: 'http://www.instagram.com/caioadam_',
              linkedin: 'https://br.linkedin.com/in/caio-adam-cardozo-29421268',
            }}
          />
          <UserCard
            about="Mais um dáriomeirense que ama a sua terra. Filho de
                  professores, estudante da rede pública, graduado em Economia
                  (Ciências Econômicas) pela UESC em 2017 e atuando como
                  bancário desde então. Deixar algum legado, passar conhecimento
                  adiante e viver a essência da vida com simplicidade são coisas
                  em que busco me guiar. Família, sítio e a fé são o meu
                  refúgio. Futebol, música e cavalos, são a minha diversão.
                  Costumo dizer que sou abençoado por tudo o que tenho."
            image={process.env.PUBLIC_URL + '/images/profile/el.jpg'}
            name="Jesiel Damacena Filho"
            profiles={{
              email: 'mailto:eldamacena@hotmail.com',
              facebook: 'https://facebook.com/el.damacena',
              instagram: 'http://www.instagram.com/eldamacena',
            }}
          />

          <UserCard
            about="Quando criança eu entrei no curso de computacao de Kadna e
                  nunca mais parei de mexer com computador. Comecei a programar
                  aos 12 anos e comecei a faculdade aos 16 anos. Meu principal
                  objetivo na vida é melhorar um pouco a cada dia. Faço muitas
                  coisas para me divertir: jogar xadrez, cubo magico, tocar
                  violão, desenhar, programar, fotografia, escrever em meu
                  diário, tirar sarro das coisas ruins que acontecem na minha
                  vida e ligar para minha mãe."
            image={process.env.PUBLIC_URL + '/images/profile/george.jpg'}
            name="George C. G. Barbosa"
            profiles={{
              github: 'https://github.com/gcgbarbosa/',
              instagram: 'https://instagram.com/gcgbarbosa',
              linkedin: 'https://www.linkedin.com/in/gcgbarbosa/',
            }}
          />

          <UserCard
            about="Quando criança eu entrei no curso de computacao de Kadna e
                  nunca mais parei de mexer com computador. Comecei a programar
                  aos 12 anos e comecei a faculdade aos 16 anos. Meu principal
                  objetivo na vida é melhorar um pouco a cada dia. Faço muitas
                  coisas para me divertir: jogar xadrez, cubo magico, tocar
                  violão, desenhar, programar, fotografia, escrever em meu
                  diário, tirar sarro das coisas ruins que acontecem na minha
                  vida e ligar para minha mãe."
            image={process.env.PUBLIC_URL + '/images/profile/paulo.jpg'}
            name="Paulo L. L. Nascimento Paixao"
            profiles={{
              email: 'mailto:paulolaerciopaixao@gmail.com',
              facebook: 'https://facebook.com/paulo.paixao.12',
              instagram: 'https://instagram.com/paulolaerciopaixao',
            }}
          />
        </Grid>
      </Box>
    </Container>
  );
}
