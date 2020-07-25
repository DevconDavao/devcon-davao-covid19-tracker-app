import Head from 'next/head';
import { Card, Nav, Footer, Carousel } from '@/components/Layout';

import './index.css'

export default function Home() {

  const data = [
    {
      hospital: 'Southern Philippine Medical Center',
      total_cases: 1000,
      new_cases: 13,
      total_recoveries: 150,
      new_recoveries: 50,
      total_suspects: 50,
      new_suspects: 25,
      active_cases: 50,
      new_active_cases: 10,
      total_deaths: 5,
      new_deaths: 2
    },
    // {
    //   hospital: 'Southern Philippine Medical Center',
    //   total_cases: 1000,
    //   new_cases: 13,
    //   total_recoveries: 150,
    //   new_recoveries: 50,
    //   total_suspects: 50,
    //   new_suspects: 25,
    //   active_cases: 50,
    //   new_active_cases: 10,
    //   total_deaths: 5,
    //   new_deaths: 2
    // },
    // {
    //   hospital: 'Southern Philippine Medical Center',
    //   total_cases: 1000,
    //   new_cases: 13,
    //   total_recoveries: 150,
    //   new_recoveries: 50,
    //   total_suspects: 50,
    //   new_suspects: 25,
    //   active_cases: 50,
    //   new_active_cases: 10,
    //   total_deaths: 5,
    //   new_deaths: 2
    // }
  ]

  return (
    <div className="container">
      <Head>
        <title>Covid19-Tracker</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Nav />

      <Carousel />

      <main>
        {
          data.map((e, idx) => {
            return (<Card data={e} key={idx} />)
          })
        }
      </main>

      <Footer />
    </div>
  );
}
