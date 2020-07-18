import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useStyles } from './chart.component.style';

export function Chart({ data, title }) {
  const classes = useStyles();
  return (
    <Paper
      variant="elevation"
      className={classes.paper}
      data-testid="paper-chart"
    >
      {title && (
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
      )}
      {data && (
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            data={data}
            margin={{ top: 5, right: 5, left: -30, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="data" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="confirmados"
              stroke="#195599"
              fill="#195599"
              fillOpacity="1"
              dot={false}
            />
            <Area
              type="monotone"
              dataKey="recuperados"
              stroke="#ffcc29"
              fill="#ffcc29"
              fillOpacity="1"
              dot={false}
            />

            <Area
              type="monotone"
              dataKey="obitos"
              stroke="#000"
              fill="#000"
              fillOpacity="1"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </Paper>
  );
}
