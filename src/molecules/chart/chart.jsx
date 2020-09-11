import React, { useState } from 'react'
import { Box, Paper, Typography, Select, MenuItem } from '@material-ui/core'

import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { useStyles } from './chart.style'

export function Chart({ data, title }) {
  const [tipoDeGrafico, setTipoDeGrafico] = useState('confirmados')
  const classes = useStyles()
  return (
    <Paper
      className={classes.paper}
      variant="elevation"
      data-testid="paper-chart"
    >
      {title && (
        <Box
          display="flex"
          justifyContent="left"
          alignItems="center"
          flexWrap="wrap"
        >
          <Box flexGrow={1} mb={2}>
            <Typography variant="h6">{title}</Typography>
          </Box>
          <Box mb={2}>
            <Select
              value={tipoDeGrafico}
              onChange={(v) => setTipoDeGrafico(v.target.value)}
              variant="outlined"
            >
              <MenuItem value="confirmados">Confirmados</MenuItem>
              <MenuItem value="recuperados">Recuperados</MenuItem>
              <MenuItem value="obitos">Óbitos</MenuItem>
            </Select>
          </Box>
        </Box>
      )}
      {data && (
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            data={data}
            margin={{ top: 5, right: 3, left: -30, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="data" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey={tipoDeGrafico}
              stroke="#195599"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </Paper>
  )
}
