import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 228,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginTop: 'auto',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  logotipo: {
    height: 16,
    marginRight: 5,
  },
  copyright: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  gridItem: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
  },
  link: {
    color: theme.palette.common.white,
  },
}));
