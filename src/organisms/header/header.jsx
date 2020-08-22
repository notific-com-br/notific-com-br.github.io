import { AppBar, Toolbar, Link } from '@material-ui/core';
import { Logo, Search } from '../../atoms';
import { PrimaryMenu } from '../../molecules';
import { useStyles } from './header.styles';

export function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" variant="outlined">
        <Toolbar className={classes.toolbar}>
          <Logo component={Link} href="/">
            Notific
          </Logo>
          <PrimaryMenu />
          <Search />
        </Toolbar>
      </AppBar>
    </div>
  );
}
