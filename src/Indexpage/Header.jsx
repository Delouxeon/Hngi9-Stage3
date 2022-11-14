import React from 'react'
import { Link } from "react-router-dom"
import HeaderMetabnb from '../assets/HeaderMetabnb.svg'

const Header = () => {

return(
  <header>
    <div>
       <img src={HeaderMetabnb} />
       <nav className='headerNav'>
          <ul>
            {}
            <li><Link to={"/index.html"}>Home</Link></li>
            {}
            <li><Link to={"/placestostay.html"}>Places to Stay</Link></li>
            <li><a href="">NFTs</a></li>
            <li><a href="">Community</a></li>
          </ul>
       </nav>
       {}
       <Link to={"/connectwallet.html"}>Connect wallet</Link>
    </div>
  </header>
);

}

export default Header;