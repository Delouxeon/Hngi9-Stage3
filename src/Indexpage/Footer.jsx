
import FooterMetabnb from '../assets/FooterMetabnb.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';


const Footer = () => {

return(
  <footer>
    <div>
      <div>
        <img src={FooterMetabnb} />
        <div>
          <img src={facebook} />
          <img src={instagram} />
          <img src={twitter} />
        </div>
        <p>&copy; 2022 Metabnb</p>
      </div>
      <div>
        <h4>Comminity</h4>
        <ul>
          <li><a href=""></a>NFT</li>
          <li><a href=""></a>Tokens</li>
          <li><a href="">Lanlords</a></li>
          <li><a href="">Discord</a></li>
        </ul>
      </div>
      <div>
        <h4>Places</h4>
        <ul>
          <li><a href=""></a>Castle</li>
          <li><a href=""></a>Farms</li>
          <li><a href=""></a>Beach</li>
          <li><a href=""></a>Learn more</li>
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