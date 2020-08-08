import React from 'react';
import {
  Box,
  Paper,
  Grid,
  Container,
  Card,
  CardContent,
  Typography,
  Divider,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Link,

} from '@material-ui/core';
import axios from 'axios';
import {tsvJSON} from './helpers/tsv-to-json';
import {Header} from './components/header/header.component';
import {Chart} from './components/chart/chart.component';
import {Breadcrumb} from './components/breadcrumb/breadcrumb.component';

class SinteseComponent extends React.Component {
  render() {
    let data = {
      confirmados: 0,
      confirmados_recente: 0,
      recuperados: 0,
      recuperados_recente: 0,
      obitos: 0,
      obitos_recente: 0,
      acompanhamento: 0,
      descartados: 0,
      ativos: 0,
      obitos_acaraci: 0,
      obitos_p_novo: 0,
      obitos_sede: 0,
      obitos_p_iris: 0,
      casos_acaraci: 0,
      casos_p_novo: 0,
      casos_sede: 0,
      casos_p_iris: 0,
      data: '',
      hora: '',
    };
    if (this.props.data.length) {
      let lastRow = this.props.data[this.props.data.length - 1];
      data.confirmados = lastRow.confirmados_total;
      data.confirmados_recente = lastRow.confirmados;
      data.recuperados = lastRow.recuperados_total;
      data.recuperados_recente = lastRow.recuperados;
      data.obitos = lastRow.obitos_total;
      data.obitos_recente = lastRow.obitos;
      data.acompanhamento = lastRow.acompanhamento;
      data.descartados = lastRow.descartados;
      data.ativos = lastRow.ativos;
      // casos detalhes
      data.casos_p_iris = lastRow.casos_p_iris;
      data.casos_sede = lastRow.casos_sede;
      data.casos_acaraci = lastRow.casos_acaraci;
      data.casos_p_iris = lastRow.casos_p_iris;
      data.casos_p_novo = lastRow.casos_p_novo;
      // obitos detalhes
      data.obitos_p_iris = lastRow.obitos_p_iris;
      data.obitos_p_novo = lastRow.obitos_p_novo;
      data.obitos_acaraci = lastRow.obitos_acaraci;
      data.obitos_sede = lastRow.obitos_sede;
      //
      data.data = lastRow.data;
      data.hora = lastRow.hora;
    }
    return (
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="stretch"
        spacing={1}
      >
        <Grid lg={4} xs={12} item>
          <Card style={{background: '#FFCC29', height: '100%'}}>
            <CardContent>
              <Typography variant="h6">Confirmados</Typography>
              <Typography variant="h4">{data.confirmados}</Typography>
              <Typography variant="body2" gutterBottom>
                +{data.confirmados_recente}
              </Typography>
              <Divider />
              <Typography variant="body1">Em acompanhamento</Typography>
              <Typography variant="h6">{data.acompanhamento}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid lg={4} xs={12} item>
          <Card
            style={{background: '#2568B0', height: '100%', color: 'white'}}
          >
            <CardContent>
              <Typography variant="h6">Recuperados</Typography>
              <Typography variant="h4">{data.recuperados}</Typography>
              <Typography variant="body2" gutterBottom>
                +{data.recuperados_recente}
              </Typography>
              <Divider />
              <Typography variant="body1">Descartados</Typography>
              <Typography variant="h6">{data.descartados}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid lg={4} xs={12} item>
          <Card style={{height: '100%'}}>
            <CardContent>
              <Typography variant="h6">Óbitos</Typography>
              <Typography variant="h4">{data.obitos}</Typography>
              <Typography variant="body2" gutterBottom>
                +{data.obitos_recente}
              </Typography>
              <Divider />
              <Typography variant="body1">Ativos</Typography>
              <Typography variant="h6">{data.ativos}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid lg={12} xs={12} item>
          <TableContainer component={Paper}>
            <Table aria-label="detalhes por distrito">
              <caption>
                Fonte: Secretaria Municipal de Saúde - Dário Meira/BA.
              </caption>
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
                  <TableCell>{data.casos_acaraci}</TableCell>
                  <TableCell>{data.obitos_acaraci}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Planalto Íris</TableCell>
                  <TableCell>{data.casos_p_iris}</TableCell>
                  <TableCell>{data.obitos_p_iris}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Ponto Novo</TableCell>
                  <TableCell>{data.casos_p_novo}</TableCell>
                  <TableCell>{data.obitos_p_novo}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Sede</TableCell>
                  <TableCell>{data.casos_sede}</TableCell>
                  <TableCell>{data.obitos_sede}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    );
  }
}

class CovidPage extends React.Component {
  state = {data: []};
  componentDidMount() {
    axios
      .get(
        '/covid-data.tsv'
      )
      .then((res) => {
        this.setState({data: tsvJSON(res?.data)});
      });
  }

  render() {
    return (
      <Container maxWidth="lg">
        <Header title="PORTAL COVID-19" />
        <Box
          display="flex"
          flexDirection="column"
          mt={4}
          style={{marginTop: 10}}
        >
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            flexWrap="wrap"
          >
            <Typography
              variant="body1"
              style={{fontSize: '1rem', color: 'rgba(0, 0, 0, 0.54)'}}
            >
              Última atualização:{' '}
              {this.state.data[this.state.data.length - 1]?.data} às{' '}
              {this.state.data[this.state.data.length - 1]?.hora}
            </Typography>
          </Box>
          <Box mt={2}>
            <Breadcrumb sitePath='Portal Covid' />
          </Box>
          <Box mt={2}>
            <SinteseComponent data={this.state.data} />
          </Box>
          <Box my={4}>
            {this.state?.data && (
              <Chart
                data={this.state.data}
                title="Casos de covid por data de notificação"
              />
            )}
          </Box>
        </Box>
      </Container>
    );
  }
}

export default CovidPage;
