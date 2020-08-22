import Head from 'next/head';
import Container from '../components/container';
import Layout from '../components/layout';
import { Header } from '../src/organisms';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>
          Notific.com.br: Informação, entretenimento, notícias, classificados e
          muito mais...
        </title>
      </Head>
      <Header />
      <Container>Data here</Container>
    </Layout>
  );
}
