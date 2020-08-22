import React from 'react';

import {useStyles} from './card-default.styles';

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core';

export const CardDefault = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Imagem de um post'
          height='150'
          image='/images/notific-logotipo.svg'
          title='something'
        />
        <CardContent>
          <Typography gutterBottom variant='h5'>{props.title}</Typography>
          <Typography gutterBottom variant='body2' color='textSecondary' component='p'>{props.text}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
          
    </Card>
  );
};
