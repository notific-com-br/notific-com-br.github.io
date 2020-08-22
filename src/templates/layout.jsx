import Meta from '../../components/meta';
import { Header, Footer } from '../organisms';

export function Layout({ children }) {
  return (
    <>
      <Meta />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
