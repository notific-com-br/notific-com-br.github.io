import React from 'react'
import { useStyles } from './jumbotron.style'
import useMediaQuery from '@material-ui/core/useMediaQuery'

export function Jumbotron({ path, altDesc, mobilePatch = '' }) {
  const matches = useMediaQuery('(min-width:600px)')
  const classes = useStyles()
  return (
    <img
      className={classes.root}
      src={matches ? path : mobilePatch}
      alt={altDesc}
    />
  )
}
