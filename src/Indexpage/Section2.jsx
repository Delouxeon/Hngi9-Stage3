import CardImage01 from '../assets/CardImage01.png'
import CardImage02 from '../assets/CardImage02.png'
import CardImage03 from '../assets/CardImage03.png'
import CardImage04 from '../assets/CardImage04.png'
import CardImage05 from '../assets/CardImage05.png'
import CardImage06 from '../assets/CardImage06.png'
import CardImage07 from '../assets/CardImage07.png'
import CardImage08 from '../assets/CardImage08.png'
import FiveStar from '../assets/FiveStar.png'

const CardSection = () => {

return(
  <section className='section2'>
    <div className='section2-container'>
      <h2 className='section2-heading' style={{margin: '20px 0'}}>Inspiration for your next adventure</h2>
      <div className="home-card-container card-container">
        <div className="card">
          <img className='card-img' src={CardImage01} />
          <div className='card-text'>
            <p className='card-left-paragraph'>Desert King <br />2345km away</p>
            <p className='card-right-paragraph'>1MBT per night <br />available for 2weeks stay</p>
          </div>
          <img className='fivestar' src={FiveStar} />
        </div>
        <div className="card">
          <img className='card-img' src={CardImage02} />
          <div className='card-text'>
            <p className='card-left-paragraph'>Desert King <br />2345km away</p>
            <p className='card-right-paragraph'>1MBT per night <br />available for 2weeks stay</p>
          </div>
          <img className='fivestar' src={FiveStar} />
        </div>
        <div className="card">
          <img className='card-img' src={CardImage03} />
          <div className='card-text'>
            <p className='card-left-paragraph'>Desert King <br />2345km away</p>
            <p className='card-right-paragraph'>1MBT per night <br />available for 2weeks stay</p>
          </div>
          <img className='fivestar' src={FiveStar} />
        </div>
        <div className="card">
          <img className='card-img' src={CardImage04} />
          <div className='card-text'>
            <p className='card-left-paragraph'>Desert King <br />2345km away</p>
            <p className='card-right-paragraph'>1MBT per night <br />available for 2weeks stay</p>
          </div>
          <img className='fivestar' src={FiveStar} />
        </div>
        <div className="card">
          <img className='card-img' src={CardImage05} />
          <div className='card-text'>
            <p className='card-left-paragraph'>Desert King <br />2345km away</p>
            <p className='card-right-paragraph'>1MBT per night <br />available for 2weeks stay</p>
          </div>
          <img className='fivestar' src={FiveStar} />
        </div>
        <div className="card">
          <img className='card-img' src={CardImage06} />
          <div className='card-text'>
            <p className='card-left-paragraph'>Desert King <br />2345km away</p>
            <p className='card-right-paragraph'>1MBT per night <br />available for 2weeks stay</p>
          </div>
          <img className='fivestar' src={FiveStar} />
        </div>
        <div className="card">
          <img className='card-img' src={CardImage07} />
          <div className='card-text'>
            <p className='card-left-paragraph'>Desert King <br />2345km away</p>
            <p className='card-right-paragraph'>1MBT per night <br />available for 2weeks stay</p>
          </div>
          <img className='fivestar' src={FiveStar} />
        </div>
        <div className="card">
          <img className='card-img' src={CardImage08} />
          <div className='card-text'>
            <p className='card-left-paragraph'>Desert King <br />2345km away</p>
            <p className='card-right-paragraph'>1MBT per night <br />available for 2weeks stay</p>
          </div>
          <img className='fivestar' src={FiveStar} />
        </div>
      </div>
    </div>
  </section>
)

}

export default CardSection