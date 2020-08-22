import Head from 'next/head';
import Container from '../components/container';
import { Layout } from '../src/templates/layout';
import { Header } from '../src/organisms';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>
          Portal Covid | Notific.com.br: Informação, entretenimento, notícias, classificados e
          muito mais...
        </title>
      </Head>
      <Container>Data here</Container>
    </Layout>
  );
}
