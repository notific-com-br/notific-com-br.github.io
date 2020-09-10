import React from 'react'
import { useStyles } from './menu.styles'
import { Link } from '@material-ui/core'

export const PrimaryMenu = () => {
  const classes = useStyles()
  return (
    <ul className={classes.root}>
      <li className={classes.item}>
        <Link className={classes.link} href="/covid">
          Portal covid
        </Link>
      </li>
      <li className={classes.item}>
        <Link className={classes.link} href="/covid">
          Vídeos
        </Link>
      </li>
      <li className={classes.item}>
        <Link className={classes.link} href="/covid">
          Contato
        </Link>
      </li>
      <li className={classes.item}>
        <Link className={classes.link} href="/sobre-nos">
          Sobre nós
        </Link>
      </li>
    </ul>
  )
}
