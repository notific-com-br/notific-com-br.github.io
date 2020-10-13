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
        <Link className={classes.link} href="/videos">
          Vídeos
        </Link>
      </li>
      <li className={classes.item}>
        <Link className={classes.link} href="https://api.whatsapp.com/send?phone=5573981436444">
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
