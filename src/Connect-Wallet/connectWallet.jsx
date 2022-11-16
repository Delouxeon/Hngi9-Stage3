import * as React from 'react';

import connectWalletMetamask from "../assets/modal/metamask.png"
import connectWalletBlue from "../assets/modal/wallet-connect.png"
import close from "../assets/modal/close.png"
import arrowRight from "../assets/modal/arrow-right.png"
import "./connectWallet.css";


function ConnectWallet({closeModal}) {

  return (
    <div className='modal-bg'>
      
      <div className='overlay'></div>

       <div className='modal-container'>

          <div className='modal'>
            <div className='modal-header'>
              <h1>Connect Wallet</h1>
              <button onClick={() => {closeModal(false)}} className='button-close'> <img src={close} /></button>
            </div>
            <div className='modal-body'>

              <p>Choose your preferred wallet</p>

              <div className='wallet'>
                <button> <img src={connectWalletMetamask} /> </button>
                <button><img src={arrowRight} /></button>
              </div>
              <div className='wallet'>
                <button> <img src={connectWalletBlue} /> </button>
                <button><img src={arrowRight} /></button>
              </div> 

            </div>
          
          </div>
      
       </div>
    </div>
  );
}

export default ConnectWallet;

