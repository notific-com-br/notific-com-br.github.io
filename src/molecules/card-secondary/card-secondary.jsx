import React from 'react';

import {useStyles} from './card-secondary.styles';

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box
} from '@material-ui/core';

export const CardSecondary = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Box display='flex' flexDirection='row'>
          <Box>
            <CardMedia
              component='img'
              alt='Imagem de um post'
              height='150'
              image='/images/notific-logotipo.svg'
              title='something'
            />
          </Box>
          <Box>
            <CardContent>
              <Typography gutterBottom variant='h5'>{props.title}</Typography>
              <Typography gutterBottom variant='body2' color='textSecondary' component='p'>{props.text}</Typography>
            </CardContent>
          </Box>
        </Box>
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
