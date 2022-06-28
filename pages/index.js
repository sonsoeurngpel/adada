import Head from 'next/head'
import { useState } from 'react';
import Navbar from '../components/navbar';
import Heroes from '../components/heroes';
import Footer from '../components/footer';
import Images from '../components/images';
import Banner from '../components/banner';
import Team from '../components/team';
import Faq from '../components/faq';
import Stats from '../components/stats';
import NftDetail from '../components/nft-detail';
import Roadmap from '../components/roadmap'


function App() {
  const [accounts, setAccounts] = useState([]);
  return (
    <div className="bg-teal">
      <Head>
        <title>NFT Minting Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Banner />
      <Navbar accounts={accounts} setAccounts={setAccounts}/>
      <Heroes accounts={accounts} setAccounts={setAccounts}/>
      <Images />
      <Roadmap />
      <NftDetail />
      <Team />
      <Faq />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;
