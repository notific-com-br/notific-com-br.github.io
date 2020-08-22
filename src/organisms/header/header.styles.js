import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolBar: {
    minHeight: 108,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),

    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      minHeight: 'auto',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    marginRight: 'auto',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
}));
