import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: 257,
    height: 52,
    flexGrow: 1,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      width: 150,
      height: 30,
    },
  },
}));
