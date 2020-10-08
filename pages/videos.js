import Head from 'next/head'
import { Box, Container as MDContainer, Typography } from '@material-ui/core'
import { Layout } from '../src/templates/layout'
import ReactPlayer from 'react-player'

export default function Videos() {
  return (
    <Layout>
      <Head>
        <title>
          Videos | Notific.com.br: Informação, entretenimento, notícias,
          classificados e muito mais...
        </title>
      </Head>
      <MDContainer>
        <Box display="flex" flexDirection="column" style={{ marginTop: 10 }}>
          <Box
            my={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
          >
            <Box>
              <ReactPlayer url="https://www.youtube.com/watch?v=fHWf7DeygqE" />
            </Box>
            <Box mt={2}>
              <ReactPlayer url="https://www.youtube.com/watch?v=1W7_uO6RHdk" />
            </Box>
          </Box>
        </Box>
      </MDContainer>
    </Layout>
  )
}
