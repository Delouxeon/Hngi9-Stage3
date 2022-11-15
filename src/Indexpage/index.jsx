import * as React from 'react';
import './index.css';
import Header from './Header';
import FirstSection from './Section1';
import CardSection from './Section2';
import MetanabNft from './Section3';
import Footer from './Footer';
import Purplebar from  './PurpleBar';


function Home() {

  return (
    <div>
      <Header />
      <FirstSection />
      <Purplebar />
      <CardSection />
      <MetanabNft />
      <Footer />
    </div>
  );
}

export default Home