import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    margin: 0,
    listStyle: 'none',
  },
  item: {
    display: 'inline-block',
    letterSpacing: 0.75,
    lineHeight: '16px',
    textAlign: 'center',
    textTransform: 'uppercase',
    padding: '0 10px',
    fontWeight: theme.typography.fontWeightBold,
  },
  link: {
    color: theme.palette.primary.main,
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));