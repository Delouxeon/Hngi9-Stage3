import * as React from 'react';

import connectWalletMetamask from "../assets/connectWalletMetamask.svg"
import connectWalletBlue from "../assets/WalletConnectBlue.svg"


function ConnectWallet({closeModal}) {

  return (
    <div className='modal-bg'>
       <div className='modal-container'>
        <div className='modal-header'>
          <h1>Connect Wallet</h1>
          <button onClick={() => {closeModal(false)}} className='button-close'>X</button>
        </div>
        <hr />
        <p>Choose your preferred wallet</p>
        <form action="">
          <select name="metamask" id="metamask">
            <option defaultValue><span><img src={connectWalletMetamask} /></span>Metamask</option>
          </select>
          <select name="blue" id="blue">
            <option defaultValue><span><img src={connectWalletBlue} /></span>WalletConnect</option>
          </select>
        </form>
        {/* <div>
          <span><img src={connectWalletMetamask} /></span>
          <p>Metamask</p>
        </div>
        <div>
          <span><img src={connectWalletBlue} /></span>
          <p>WalletConnect</p>
        </div> */}
      
       </div>
    </div>
  );
}

export default ConnectWallet;

