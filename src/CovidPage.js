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

import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import axios from 'axios';

class SinteseComponent extends React.Component {

  render () {
    let data = {
      confirmados: 120,
      confirmados_recente: 10,
      recuperados: 38,
      recuperados_recente: 10,
      obitos: 38,
      obitos_recente: 10,
      acompanhamento: 189,
      descartados: 68,
      ativos: 82,
    }
    if (this.props.data.length) {
      console.log(this.props.data)
    }
    return (
      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='stretch'
        spacing={1}
      >
        <Grid lg={12} xs={12} item>
          <Paper variant='outlined' style={{background: '#195599', color: 'white'}}>
            <Box p={2}>
              <Typography variant='h6'>
                Síntese
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid lg={4} xs={12} item>
          <Card style={{background: '#FFCC29', height:'100%'}}>
            <CardContent>
              <Typography variant='h6'>
                Confirmados
              </Typography>
              <Typography variant='h4'>
                {data.confirmados}
              </Typography>
              <Typography variant='body2' gutterBottom>
                +{data.confirmados_recente}
              </Typography>
              <Divider />
              <Typography variant='body1'>
                Em acompanhamento
              </Typography>
              <Typography variant='h6' >
                {data.acompanhamento}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid lg={4} xs={12} item>
          <Card style={{background: '#2568B0', height:'100%', color: 'white'}}>
            <CardContent>
              <Typography variant='h6'>
                Recuperados
              </Typography>
              <Typography variant='h4'>
                {data.recuperados}
              </Typography>
              <Typography variant='body2' gutterBottom>
                +{data.recuperados_recente}
              </Typography>
              <Divider />
              <Typography variant='body1'>
                Descartados
              </Typography>
              <Typography variant='h6' >
                {data.descartados}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid lg={4} xs={12} item>
          <Card style={{height:'100%'}}>
            <CardContent>
              <Typography variant='h6'>
                Óbitos
              </Typography>
              <Typography variant='h4'>
                1
                {data.obitos}
              </Typography>
              <Typography variant='body2' gutterBottom>
                +{data.obitos_recente}
              </Typography>
              <Divider />
              <Typography variant='body1'>
                Ativos
              </Typography>
              <Typography variant='h6' >
                {data.ativos}
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
}

class VizualizacaoComponent extends React.Component {
  render() {
    return (
      <Box display='flex' flexDirection='column' spacing={2}>
        <Box item>
          <Paper variant='outlined' style={{background: '#195599', color: 'white'}}>
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
                <LineChart data={this.props.data}
                  margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="data" />
                  <YAxis />
                  <Tooltip />
                  <Line type='monotone' dataKey='casos' stroke='#195599' />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Box>
      </Box>
    )
  }
}

class CovidPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {data: []}
    axios.get(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQK8qvNBCji9SrCkHVBKCHQVQ6s9DK1GlBSIaQDnrW5Cqp0omkEO-5Ke8IPiuPzamwjwK9ACY6y2KUl/pub?gid=0&single=true&output=tsv'
    )
      .then(res => {
      this.setState({data: this.tsvJSON(res.data)})
    })
  }
  
  tsvJSON(tsv) {
    var lines = tsv.split("\n");
    var result = [];
    var headers = lines[0].split("\t");
    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split("\t");
      for (var j = 0; j < headers.length; j++) {
        if(headers[j] !== 'data'){
          obj[headers[j]] = parseInt(currentline[j]);
        } else {
          let parts = currentline[j].split('-')
          let d = new Date(parts[0], parts[1], parts[2])
          obj[headers[j]] = d.getDate() + '/' + d.getMonth()
        }
      }
      result.push(obj);
    }
    return result; //JavaScript object
    //return JSON.stringify(result); //JSON
  }

  render () {
    return (
      <Container maxWidth='lg'>
        <Box display='flex' flexDirection='column' mt={4}>
          <Box item>
            <Typography variant='h4'>
              Painel Covid Dário Meira
            </Typography>
          </Box>
          <Box mt={2} item>
            <SinteseComponent data = {this.state.data} />
          </Box>
          <Box my={4} item>
            <VizualizacaoComponent data = {this.state.data} />
          </Box>
        </Box>
      </Container>
    )
  }
}

export default CovidPage;
