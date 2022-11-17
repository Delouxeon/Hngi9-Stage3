import MBTokenPurplebar from '../assets/MBTokenPurplebar.png'
import MetamaskPurplebar from '../assets/MetamaskPurplebar.png'
import OpenSeaPurplebar from '../assets/OpenSeaPurplebar.png'
const Purplebar = () => {

return(
  <section className='purplebar-section'>
    <div className="purplebar">
      <img className='mbt_token' src={MBTokenPurplebar} />
      <img className='meta_mask' src={MetamaskPurplebar} />
      <img className='open_sea' src={OpenSeaPurplebar} />
    </div>
  </section>
)

} 

export default Purplebar