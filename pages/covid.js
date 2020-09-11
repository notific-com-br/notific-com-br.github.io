import { useState, useEffect } from 'react'
import Head from 'next/head'
import { Box, Container as MDContainer, Typography } from '@material-ui/core'
import axios from 'axios'
import Container from '../components/container'
import { Chart } from '../src/molecules'
import { Layout } from '../src/templates/layout'
import { SinteseComponent } from '../src/molecules/covid-sintese/covid-sintese'
import { tsvJSON } from '../src/helpers/tsv-to-json'

export default function Index() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/covid-data.tsv').then((res) => {
      setData(tsvJSON(res?.data))
    })
  }, [setData])
  return (
    <Layout>
      <Head>
        <title>
          Portal Covid | Notific.com.br: Informação, entretenimento, notícias,
          classificados e muito mais...
        </title>
      </Head>
      <Container>
        <MDContainer>
          <Box
            display="flex"
            flexDirection="column"
            mt={4}
            style={{ marginTop: 10 }}
          >
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              flexWrap="wrap"
            >
              <Typography
                variant="body1"
                style={{ fontSize: '1rem', color: 'rgba(0, 0, 0, 0.54)' }}
              >
                Última atualização: {data[data.length - 1]?.data} às{' '}
                {data[data.length - 1]?.hora}
              </Typography>
            </Box>
            <Box mt={2}>
              <SinteseComponent data={data} />
            </Box>
            <Box my={4}>
              {data && (
                <Chart
                  data={data}
                  title="Casos de covid por data de notificação"
                />
              )}
            </Box>
          </Box>
        </MDContainer>
      </Container>
    </Layout>
  )
}
