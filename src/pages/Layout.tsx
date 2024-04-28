import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import { Roboto_Condensed } from 'next/font/google';
import Head from 'next/head';

const robotoC = Roboto_Condensed({ subsets: ['latin'] });

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>Marvel&apos;s Characters</title>
        <meta name="description" content="This is a code challenge for K-lagan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/img/favicon.ico" />
      </Head>
      <div className={robotoC.className}>
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;