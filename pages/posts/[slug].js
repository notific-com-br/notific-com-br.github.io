import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

import { Container, Box, Typography } from '@material-ui/core'

// import PostBody from '../../components/post-body'
// import MoreStories from '../../components/more-stories'
// import SectionSeparator from '../../components/section-separator'
// import PostTitle from '../../components/post-title'

import Tags from '../../components/tags'
import PostHeader from '../../components/post-header'

import { Layout } from '../../src/templates/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'

export default function Post({ post, posts, preview }) {
  const router = useRouter()
  // const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <strong>Loading…</strong>
        ) : (
          <Box my={4}>
            <article>
              <Head>
                <title>
                  {post.title} | Notific.com.br: Informação, entretenimento,
                  notícias, classificados e muito mais...
                </title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node?.sourceUrl}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage.node}
                date={post.date}
                author={post.author.node}
                categories={post.categories}
              />
              <Typography variant="body1">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </Typography>
              <footer>
                {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
              </footer>
            </article>
          </Box>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const { post, posts } = await getPostAndMorePosts(
    params.slug,
    preview,
    previewData
  )

  return {
    props: {
      preview,
      post,
      posts,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  }
}
