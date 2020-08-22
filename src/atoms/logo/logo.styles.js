import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    widows: 257,
    height: 52,
    flexGrow: 1,
    color: theme.palette.common.white,
    fontSize: '2rem',
    textTransform: 'uppercase',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));
