import React from 'react'
// import { useStyles } from './grid-posts.styles'

import { CardDefault } from '../../molecules/'
import { Grid } from '@material-ui/core'

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

// The function should take carer of calculating
// how many big card per row we could/should have

export function GridPosts({ posts }) {
  // const classes = useStyles()

  const cards = posts.map((v) => (
    <Grid item xs={4} key={v.key}>
      <CardDefault
        title={v.node.title}
        img={v.node.featuredImage.node.sourceUrl}
      />
    </Grid>
  ))

  return (
    <Grid container alignItems="stretch" spacing={3}>
      {cards}
    </Grid>
  )
}
