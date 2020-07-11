import React from 'react';

import {
  Box,
  Paper,
  Grid,
  Container,
  Card,
  CardContent,
  CardActions,
  Typography,
  Divider,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
} from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(
  () => ({
    grid: {
    },
    cardImage: {
    }
  }
  )
);

export function SinteseComponent() {
  return(
    <Grid
      container
      direction='row'
      justify='flex-start'
      alignItems='center'
      spacing={2}
    >
      <Grid xl={12} xs={12} item>
        <Paper>
          <Box p={2}>
            <Typography variant='h4'>
              Síntese
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid xl={4} xs={12} item>
        <Card>
          <CardContent>
            <Typography variant='h4'>
              Confirmados
            </Typography>
            <Typography variant='h2'>
              120
            </Typography>
            <Typography variant='h6' gutterBottom>
              +10
            </Typography>
            <Divider />
            <Typography variant='h6'>
              Em acompanhamento
            </Typography>
            <Typography variant='body1' >
              189
            </Typography>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
      </Grid>
      <Grid xl={4} xs={12} item>
        <Card>
          <CardContent>
            <Typography variant='h4'>
              Recuperados
            </Typography>
            <Typography variant='h2'>
              38
            </Typography>
            <Typography variant='h6' gutterBottom>
              +0
            </Typography>
            <Divider />
            <Typography variant='h6'>
              Descartados
            </Typography>
            <Typography variant='body1' >
              68
            </Typography>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
      </Grid>
      <Grid xl={4} xs={12} item>
        <Card>
          <CardContent>
            <Typography variant='h4'>
              Óbito
            </Typography>
            <Typography variant='h2'>
              1
            </Typography>
            <Typography variant='h6' gutterBottom>
              +0
            </Typography>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
      </Grid>
      <Grid xl={12} xs={12} item>
        <TableContainer component={Paper}>
          <Table aria-label='detalhes por distrito'>
            <caption>Fonte: Prefeitura de Dario Meira</caption>
            <TableHead>
              <TableRow>
                <TableCell>Local</TableCell>
                <TableCell>Confirmados</TableCell>
                <TableCell>Óbito</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Acaraci</TableCell>
                <TableCell>9</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Planalto Iris</TableCell>
                <TableCell>3</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ponto Novo</TableCell>
                <TableCell>4</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sede</TableCell>
                <TableCell>104</TableCell>
                <TableCell>1</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>

  )
}


export function VizualizacaoComponent() {
  return(
    <Box display='flex' flexDirection='column'>
      <Box item>
        <Paper>
          <Box p={2}>
            <Typography variant='h4'>
              Casos novos de covid por data de notificação
            </Typography>
          </Box>
        </Paper>
      </Box>
      <Box item>
      </Box>
    </Box>
  )
}

export default function CovidPage() {
  const classes = useStyles();
  
  return (
    <Container maxWidth='xl'>
      <Box display='flex' flexDirection='column'>
        
        <Box item>
          <Typography variant='h2'>
            Painel Covid Dário Meira
          </Typography>

        </Box>
        <Box pt={4} item>
          <SinteseComponent />
        </Box>
        <Box pt={4} item>
          <VizualizacaoComponent />
        </Box>
      </Box>
    </Container>
  )
}

