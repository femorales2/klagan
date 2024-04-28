import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '@/pages/Layout';
import CardContextProvider from '@/context/CardContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CardContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CardContextProvider>
  );
}
