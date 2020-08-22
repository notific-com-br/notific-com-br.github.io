import React from 'react';
import {useStyles} from './grid-posts.styles';

import {CardDefault, CardSecondary} from '../../molecules/';
import { Grid } from '@material-ui/core'

const data = 
  [
    {
      'title': 'Estudo: PIB deve trazer no 2º tri recessão recorde',
      'text': 'none',
      'photo': 'none',
      'link': 'none',
    },
    {
      'title': 'PM acha 2º corpo de sem-teto em meio a frio de SP',
      'text': 'none',
      'photo': 'none',
      'link': 'none',
    },
    {
      'title': 'Apple é processada por falha em MacBooks e pode ter que reembolsar os clientes',
      'text': 'Usuários querem ressarcimento por custos para corrigir falha de projeto que causou problema de tela em modelos fabricados em 2016 e 2017',
      'photo': 'none',
      'link': 'none',
    },
    {
      'title': 'Vídeo mostra momento da queda de casa em Mauá, SP',
      'text': 'none',
      'photo': 'none',
      'link': 'none',
    },
    {
      'title': 'Apple é processada por falha em MacBooks e pode ter que reembolsar os clientes',
      'text': 'Usuários querem ressarcimento por custos para corrigir falha de projeto que causou problema de tela em modelos fabricados em 2016 e 2017',
      'photo': 'none',
      'link': 'none',
    },
    {
      'title': 'STF determina fim da superlotação em unidades socioeducativas em todo o país',
      'text': 'none',
      'photo': 'none',
      'link': 'none',
    },
    {
      'title': 'Apple é processada por falha em MacBooks e pode ter que reembolsar os clientes',
      'text': 'Usuários querem ressarcimento por custos para corrigir falha de projeto que causou problema de tela em modelos fabricados em 2016 e 2017',
      'photo': 'none',
      'link': 'none',
    },
    {
      'title': 'Apple é processada por falha em MacBooks e pode ter que reembolsar os clientes',
      'text': 'Usuários querem ressarcimento por custos para corrigir falha de projeto que causou problema de tela em modelos fabricados em 2016 e 2017',
      'photo': 'none',
      'link': 'none',
    },
  ]

/*
[
  {
    'title':
    'text':
    'photo':
    'link':
  },
]
The component should be able to define the type of the grid to use
*/

// TODO: write a function getCard
// The function should take carer of calculating 
// how many big card per row we could/should have

export function GridPosts() {
  const classes = useStyles();
  
  let cards = data.map( (v) => 
    (
      <Grid item xs={3}>
        <CardDefault
          title={v.title}
        />
      </Grid>
    )
  )

  return (
    <Grid container alignItems="stretch" spacing={3}>
      {cards}
    </Grid>
  )
}
