import setting5 from '../assets/setting5.svg'

const LocationBar = () => {

return(
  <section>
    <div className='location-bar-container'> 
      <div className="location-options">
        <ul>
          <li><a href="">Resturant</a></li>
          <li><a href="">Cottage</a></li>
          <li><a href="">Castle</a></li>
          <li><a href="">fantast city</a></li>
          <li><a href="">Carbins</a></li>
          <li><a href="">Off-grid</a></li>
          <li><a href="">Farms</a></li>
        </ul>
      </div>
      <div className="location settings">
        <p>Location</p>
        <span><img src={setting5} /></span>
      </div>
    </div>
  </section>
)

} 

export default LocationBar 