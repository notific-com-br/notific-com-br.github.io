import React from 'react';
import {
  Breadcrumbs,
  Link,
  Typography,
} from '@material-ui/core';

export function Breadcrumb({sitePath}) {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
          Inicio
        </Link>
        <Typography color="textPrimary">{sitePath}</Typography>
      </Breadcrumbs>
    </>
  );
}
