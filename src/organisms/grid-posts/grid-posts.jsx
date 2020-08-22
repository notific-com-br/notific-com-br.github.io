import React from 'react';
import {useStyles} from './grid-posts.styles';

import {CardDefault, CardSecondary} from '../../molecules/';
import { Grid } from '@material-ui/core'

// TODO: describe the data

export function GridPosts() {
  const classes = useStyles();
  return (
    <Grid container alignItems="stretch" spacing={3}>
      <Grid item xs={6}>
        <CardSecondary
          title='Estudo: PIB deve trazer no 2º tri recessão recorde'
          text='Esperados para o próximo dia 1º de setembro, os dados do Produto Interno Bruto (PIB) brasileiro deverão mostrar que o tombo da economia com a pandemia [...]'
        />
      </Grid>
      <Grid item xs={3}>
        <CardDefault
          title='SP: aula online é invadida com foto nazista'
        />
      </Grid>
      <Grid item xs={3}>
        <CardDefault
          title='PM acha 2º corpo de sem-teto em meio a frio de SP'
        />
      </Grid>
      <Grid item xs={3}>
        <CardDefault
          title='Flávio vai ao MPF contra inquérito eleitoral'
        />
      </Grid>
      <Grid item xs={6}>
        <CardSecondary
          title='Vídeo mostra momento da queda de casa em Mauá, SP'
          text='Segundo o Corpo de Bombeiros, ninguém ficou ferido. Prefeitura da cidade disse que vai "apurar com rigor" o motivo do desabamento.'
        />
      </Grid>
      <Grid item xs={3}>
        <CardDefault
          title='2º quarto - Rockets 41 x 37 Thunder'
        />
      </Grid>
    </Grid>)
}
