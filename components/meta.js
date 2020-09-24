import Head from 'next/head'
import { HOME_OG_IMAGE_URL } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      <link rel="manifest" href="/favicon/manifest.json" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="description" content="Seu portal de noticias." />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}
