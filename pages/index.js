import Head from 'next/head';
import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Layout from '../components/layout';
import { getAllPostsForHome } from '../lib/api';
import { Header, Footer } from '../src/organisms';
import { Jumbotron } from '../src/atoms';
import { Link } from '@material-ui/core';

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <Layout preview={preview}>
      <Head>
        <title>
          Notific.com.br: Informação, entretenimento, notícias, classificados e
          muito mais...
        </title>
      </Head>
      <Header />
      <Link href="/covid">
        <Jumbotron
          path="/images/banner-covid.gif"
          altDesc=" Banner sobre as informações do Covid-19 em Dário Meira"
        />
      </Link>
      <Container>
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage.node}
            date={heroPost.date}
            author={heroPost.author.node}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps({ preview = true }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
}
