
import FooterMetabnb from '../assets/FooterMetabnb.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';


const Footer = () => {

return(
  <footer className='footer'>
    <div className='footer-container'>
      <div>
        <img className ='footermethabnb' src={FooterMetabnb} />
        <div className='footer-icons'>
          <img className='facebook' src={facebook} />
          <img className='instagram' src={instagram} />
          <img className='twitter' src={twitter} />
        </div>
        <p>&copy; 2022 Metabnb</p>
      </div>
      <div>
        <h4>Comminity</h4>
        <ul>
          <li><a href="">NFT</a></li>
          <li><a href="">Tokens</a></li>
          <li><a href="">Lanlords</a></li>
          <li><a href="">Discord</a></li>
        </ul>
      </div>
      <div>
        <h4>Places</h4>
        <ul>
          <li><a href="">Castle</a></li>
          <li><a href="">Farms</a></li>
          <li><a href="">Beach</a></li>
          <li><a href="">Learn more</a></li>
        </ul>
      </div>
      <div>
        <h4>About us</h4>
        <ul>
          <li><a href="">Road map</a></li>
          <li><a href="">Creators</a></li>
          <li><a href="">Career</a></li>
          <li><a href="">Contact us</a></li>
        </ul>
      </div>
    </div>
  </footer>
)

} 

export default Footer