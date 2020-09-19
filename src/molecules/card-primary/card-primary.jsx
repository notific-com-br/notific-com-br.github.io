import React from 'react'

import { useStyles } from './card-primary.styles'
import { DateFormat } from '../../molecules'
// import WhatsAppIcon from '@material-ui/icons/WhatsApp'
// import FacebookIcon from '@material-ui/icons/Facebook'
// import InstagramIcon from '@material-ui/icons/Instagram'

import {
  Card,
  CardActionArea,
  // CardActions,
  CardContent,
  CardMedia,
  // Button,
  Typography,
  Hidden,
} from '@material-ui/core'

export const CardPrimary = (props) => {
  const classes = useStyles()
  return (
    <>
      <CardActionArea component="a" href={'posts/' + props.link}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {props.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                <DateFormat dateString={props.date} />
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {props.description.replace(/<\/?p>/, '').slice(0, 100) + ' [...]'}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Leia mais...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={props.img}
              title={props.title}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </>
  )
}
