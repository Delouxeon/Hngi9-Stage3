import setting5 from '../assets/setting5.png'

const LocationBar = () => {

return(
  <section>
    <div className='location-bar-container'> 

      <div className="location-options">
        <a href="">Resturant</a>
        <a href="">Cottage</a>
        <a href="">Castle</a>
        <a href="">fantast city</a>
        <a href="">Carbins</a>
        <a href="">Off-grid</a>
        <a href="">Farms</a>
  
        <select className="location-select">
          <option>Resturant</option>
          <option>Cottage</option>
          <option>Castle</option>
          <option>fantast city</option>
          <option>Carbins</option>
          <option>Off-grid</option>
          <option>Farms</option>
        </select>


        <div className="location-settings">
          <p>Location</p>
          <img className='settings-icon' src={setting5} />
        </div>
      </div>
    </div>
  </section>
)

} 

export default LocationBar 