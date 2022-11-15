import React from 'react';
import FourPicsImage from '../assets/FourPicsImage.svg';
const FirstSection = () => {

return(
  <section className='section1' >
    <div className='section1-container'>
      <div className="section1writeup">
        <h1>Rent a <span className="span-purple">Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>
        <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
        <form action="">
          <input type="text" placeholder='Search for location'/>
          <button>Search</button>
        </form>
      </div>
      <div className="section1image">
        <img src={FourPicsImage} />
      </div>
    </div>
  </section>
);

}

export default FirstSection