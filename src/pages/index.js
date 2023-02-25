import Head from "next/head";
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('../components/common/Header'), { ssr: false });
const Footer = dynamic(() => import('../components/common/Footer'), { ssr: false });
const Hero = dynamic(() => import('../components/parts/Hero'), { ssr: false });
const Info = dynamic(() => import('../components/parts/Info'), { ssr: false });
const Popular = dynamic(() => import('../components/parts/Popular'), { ssr: false });
const Airbnb = dynamic(() => import('../components/parts/Airbnb'), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Traveller</title>
        <meta name="description" content="Your Travel Guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Hero />
        <Info />
        <Popular />
        <Airbnb />
        <Footer />
      </main>
    </>
  );
}
