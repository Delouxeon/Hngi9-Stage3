import * as React from 'react';
import './App.css';
import {Navigate, Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Home from './Indexpage/index'
import Places from './PlacesToStay/Places';
import ConnectWallet from './Connect-Wallet/connectWallet';




function App() {
  return (
    <div>
        <Routes> 
          <Route exact path="/" element={<Home />} />
  
          <Route path="/placestostay.html" element={<Places />} />

          <Route path="/connectwallet.html" element={<ConnectWallet />} />
  
          {/* <Navigate to="/" /> */}
        </Routes>
    </div>
  );
}

export default App;



