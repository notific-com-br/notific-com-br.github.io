import React from 'react'

import { useStyles } from './card-default.styles'

import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core'

export const CardDefault = (props) => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.action} href={'posts/' + props.link}>
        <CardMedia
          component="img"
          alt="Imagem de um post"
          height="150"
          image={props.img}
          title="something"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <WhatsAppIcon />
        </Button>
        <Button size="small" color="primary">
          <FacebookIcon />
        </Button>
        <Button size="small" color="primary">
          <InstagramIcon />
        </Button>
      </CardActions>
    </Card>
  )
}
