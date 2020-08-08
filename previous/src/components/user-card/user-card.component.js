import React from 'react';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  Link,
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import { useStyles } from './user-card.component.style';

export function UserCard({ name, image, profiles, about }) {
  const classes = useStyles();
  return (
    <Grid xs={12} lg={4} item>
      <Card className={classes.card} >
        <CardMedia className={classes.cardImage} image={image} title={name} />
        <CardActions>
          {profiles?.facebook && (
            <Link href={profiles?.facebook}>
              <FacebookIcon />
            </Link>
          )}
          {profiles?.instagram && (
            <Link href={profiles.instagram}>
              <InstagramIcon />
            </Link>
          )}
          {profiles?.linkedin && (
            <Link target="_blank" href={profiles.linkedin}>
              <LinkedInIcon />
            </Link>
          )}
          {profiles?.github && (
            <Link target="_blank" href={profiles.github}>
              <GitIcon />
            </Link>
          )}
          {profiles?.email && (
            <Link href={profiles.email}>
              <EmailIcon />
            </Link>
          )}
        </CardActions>
        <CardContent className={classes.cardBody}>
          <Typography gutterBottom variant="h5">
            {name}
          </Typography>
          <Typography variant="body2">{about}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
