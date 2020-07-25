import Head from 'next/head';
import Nav from '@/components/Layout/Nav/Nav';
import Footer from '@/components/Layout/Footer/Footer';

export default function Dashboard() {
  return (
    <div className="container">
      <Head>
        <title>Covid-19 Tracker</title>
        <link rel="icon" href="/devcon.png" />
      </Head>

      <Nav />

      <img src="https://i.pinimg.com/originals/ef/7f/b1/ef7fb1b37078b6a2aef8e40710446bfa.jpg" className="w-full" style={{height: '405px'}}/>

      <main>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
