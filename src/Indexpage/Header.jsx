import React from 'react'
import { Link } from "react-router-dom"
import HeaderMetabnb from '../assets/HeaderMetabnb.svg'

const Header = () => {

return(
  <header>
    <div className='header-container'>
       <img className='headermethabnb' src={HeaderMetabnb} />
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
       <button className='btn btn-purple'>Connect wallet</button>
    </div>
  </header>
);

}

export default Header;