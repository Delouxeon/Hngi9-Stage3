import React from 'react';
import FourPicsImage from '../assets/FourPicsImage.svg';
const FirstSection = () => {

return(
  <section className='section1' >
    <div className='section1-container'>
      <div className="section1writeup">
        <h1 className='sec1-heading'>Rent a <span style ={{ color:'#A02279'}} className="span-purple">Place</span> away from <span style ={{ color:'#A02279'}}>Home</span> in the <span style ={{ color:'#A02279'}}>Metaverse</span></h1>
        <p className='sec1-paragraph'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
        <form className='sec1-form' action="">
          <input className='sec1input' type="text" placeholder='Search for location'/>
          <button className='sec1button'>Search</button>
        </form>
      </div>
      <div className="section1image">
        <img className='fourpics' src={FourPicsImage} />
      </div>
    </div>
  </section>
);

}

export default FirstSection