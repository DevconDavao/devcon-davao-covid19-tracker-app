import Head from 'next/head';
import Nav from '../../components/Layout/Nav/Nav';
import Footer from '../../components/Layout/Footer/Footer';

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>Covid-19 Tracker</title>
        <link rel="icon" href="/devcon.png" />
      </Head>

      <Nav />

      <main>
          About Page
      </main>

      <Footer />
    </div>
  );
}
