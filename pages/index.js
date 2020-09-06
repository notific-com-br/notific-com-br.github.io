import Head from 'next/head'

import { Link, Box, Container } from '@material-ui/core'

// import MoreStories from '../components/more-stories'
// import HeroPost from '../components/hero-post'

import { Layout } from '../src/templates/layout'
import { GridPosts } from '../src/organisms'
import { getAllPostsForHome } from '../lib/api'

import { Jumbotron } from '../src/atoms'

export default function Index({ allPosts: { edges }, preview }) {
  // const heroPost = edges[0]?.node
  // const morePosts = edges.slice(1)
  // console.log(JSON.stringify(edges))

  /* TODO: replace heroPost with my thingy */
  /* it is going to be a 3 by 3 grid, initially */
  /* TODO: finish the individual post */

  return (
    <Layout preview={preview}>
      <Head>
        <title>
          Notific.com.br: Informação, entretenimento, notícias, classificados e
          muito mais...
        </title>
      </Head>
      <Box>
        <Link href="/covid">
          <Jumbotron
            path="/images/banner-covid.gif"
            altDesc=" Banner sobre as informações do Covid-19 em Dário Meira"
          />
        </Link>
      </Box>
      <Container maxWidth="md">
        <Box my={4}>
          <GridPosts posts={edges} />
        </Box>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ preview = true }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
  }
}
