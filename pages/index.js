import Head from 'next/head';
import Nav from '../components/Layout/Nav/Nav';
import Footer from '../components/Layout/Footer/Footer';
import Carousel from '../components/Layout/Carousel/Carousel';
import Card from '../components/Layout/Card/Card';
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
    }
  ]

  return (
    <div className="container">
      <Head>
        <title>Covid19-Tracker</title>
        <link rel="icon" href="/devcon.png" />
      </Head>

      <Nav />

      <Carousel />

      <main>
        {
          data.map(e => {
            return (<Card data={e} />)
          })
        }
      </main>

      <Footer />
    </div>
  );
}
