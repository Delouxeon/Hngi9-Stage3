import * as React from 'react';

import connectWalletMetamask from "../assets/connectWalletMetamask.svg"
import connectWalletBlue from "../assets/WalletConnectBlue.svg"
import './connectWallet.css'


function ConnectWallet({closeModal}) {

  return (
    <div className='modal-bg'>
      <div className='overlay'></div>
       <div className='modal-container'>
        <div className='modal'>
          <div className='modal-header'>
          <h1>Connect Wallet</h1>
          <button onClick={() => {closeModal(false)}} className='button-close'>X</button>
          </div>
          <hr />
          <div className='modal-body'>
             <p>Choose your preferred wallet</p>
            <form action="">
              <select name="metamask" id="metamask">
                <option defaultValue><span><img src={connectWalletMetamask} /></span>Metamask</option>
              </select>
              <select name="blue" id="blue">
                <option defaultValue><span><img src={connectWalletBlue} /></span>WalletConnect</option>
              </select>
            </form>
          </div>
        </div>
       </div>
    </div>
  );
}

export default ConnectWallet;

