import React from 'react'
import {
  AppBar,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  useMediaQuery,
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import MoreIcon from '@material-ui/icons/MoreVert'
import { Logo } from '../../atoms'
import { PrimaryMenu } from '../../molecules'
import { useStyles } from './header.styles'

export function Header() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const classes = useStyles()

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <Container className={classes.container}>
            <div className={classes.logo}>
              <Logo />
            </div>

            <div>
              {matches ? (
                <PrimaryMenu />
              ) : (
                <>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <MoreIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Portal Covid</MenuItem>
                    <MenuItem onClick={handleClose}>Vídeos</MenuItem>
                    <MenuItem onClick={handleClose}>Contato</MenuItem>
                    <MenuItem onClick={handleClose}>Sobre Nós</MenuItem>
                  </Menu>
                </>
              )}
            </div>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  )
}