import React from 'react';

import {
  Box,
  Paper,
  Grid,
  Container,
  Card,
  CardContent,
  //CardActions,
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

import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
  },
}));


export function SinteseComponent() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='row'
      justify='flex-start'
      alignItems='stretch'
      spacing={1}
    >
      <Grid lg={12} xs={12} item>
        <Paper>
          <Box p={2}>
            <Typography variant='h6'>
              Síntese
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid lg={4} xs={12} item>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant='body1'>
              Confirmados
            </Typography>
            <Typography variant='h4'>
              120
            </Typography>
            <Typography variant='body2' gutterBottom>
              +10
            </Typography>
            <Divider />
            <Typography variant='body1'>
              Em acompanhamento
            </Typography>
            <Typography variant='h6' >
              189
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid lg={4} xs={12} item>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant='body1'>
              Recuperados
            </Typography>
            <Typography variant='h4'>
              38
            </Typography>
            <Typography variant='body2' gutterBottom>
              +0
            </Typography>
            <Divider />
            <Typography variant='body1'>
              Descartados
            </Typography>
            <Typography variant='h6' >
              68
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid lg={4} xs={12} item>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant='body1'>
              Óbito
            </Typography>
            <Typography variant='h6'>
              1
            </Typography>
            <Typography variant='body2' gutterBottom>
              +0
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid lg={12} xs={12} item>
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
  let data = [
    {data: '2020-07-11', casos: 10},
    {data: '2020-07-10', casos: 5},
    {data: '2020-07-09', casos: 3},
    {data: '2020-07-08', casos: 1},
    {data: '2020-07-07', casos: 10},
    {data: '2020-07-06', casos: 3},
    {data: '2020-07-05', casos: 7},
    {data: '2020-07-04', casos: 8},
    {data: '2020-07-03', casos: 2},
    {data: '2020-07-02', casos: 1},
    {data: '2020-07-01', casos: 0},
  ]
  return (
    <Box display='flex' flexDirection='column' spacing={2}>
      <Box item>
        <Paper>
          <Box p={2}>
            <Typography variant='h6'>
              Casos novos de covid por data de notificação
            </Typography>
          </Box>
        </Paper>
      </Box>
      <Box mt={1} item>
        <Paper>
          <Box p={2}>
            <ResponsiveContainer width='100%' height={400}>
              <LineChart data={data}
                margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="data" />
                <YAxis />
                <Tooltip />
                <Line type='monotone' dataKey='casos' stroke='#8884d8' fill='#8884d8' />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Paper>
      </Box>
    </Box>
  )
}

export default function CovidPage() {
  const classes = useStyles();
  return (
    <Container maxWidth='lg'>
      <Box display='flex' flexDirection='column' mt={4}>
        <Box item>
          <Typography variant='h4'>
            Painel Covid Dário Meira
          </Typography>
        </Box>
        <Box mt={2} item>
          <SinteseComponent />
        </Box>
        <Box mt={4} item>
          <VizualizacaoComponent />
        </Box>
      </Box>
    </Container>
  )
}

