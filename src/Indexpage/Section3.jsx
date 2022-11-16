import ThreePics from '../assets/ThreePics.svg'

const MetanabNft = () => {

return(
  <section className='section3'>
    <div className='section3-container'>
      <div className='section3writeup'>
        <h3 className='section3heading' >Metabnb NFTs</h3>
        <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
        <a className='btn btn-white ' href="" >Learn more</a> 
      </div>
      <div className='section3img'>
        <img className="threeimage" src={ThreePics} />
      </div>
    </div>
  </section>
)

}

export default MetanabNft