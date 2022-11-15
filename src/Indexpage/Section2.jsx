import CardImage01 from '../assets/CardImage01.svg'
import CardImage02 from '../assets/CardImage02.svg'
import CardImage03 from '../assets/CardImage03.svg'
import CardImage04 from '../assets/CardImage04.svg'
import CardImage05 from '../assets/CardImage05.svg'
import CardImage06 from '../assets/CardImage06.svg'
import CardImage07 from '../assets/CardImage07.svg'
import CardImage08 from '../assets/CardImage08.svg'
import FiveStar from '../assets/FiveStar.svg'

const CardSection = () => {

return(
  <section className='section2'>
    <div className='section2-container'>
      <h2>Inspiration for your next adventure</h2>
      <div className="home-card-container card-container">
        <div className="card">
          <img src={CardImage01} />
          <div>
            <p>Desert King <br />2345km away</p>
            <p>1MBT per night <br />available for 2weeks stay</p>
          </div>
          <img src={FiveStar} />
        </div>
        <div className="card">
          <img src={CardImage02} />
          <div>
            <p>Desert King <br />2345km away</p>
            <p>1MBT per night <br />available for 2weeks stay</p>
          </div>
          <img src={FiveStar} />
        </div>
        <div className="card">
          <img src={CardImage03} />
          <div>
            <p>Desert King <br />2345km away</p>
            <p>1MBT per night <br />available for 2weeks stay</p>
          </div>
          <img src={FiveStar} />
        </div>
        <div className="card">
          <img src={CardImage04} />
          <div>
            <p>Desert King <br />2345km away</p>
            <p>1MBT per night <br />available for 2weeks stay</p>
          </div>
          <img src={FiveStar} />
        </div>
        <div className="card">
          <img src={CardImage05} />
          <div>
            <p>Desert King <br />2345km away</p>
            <p>1MBT per night <br />available for 2weeks stay</p>
          </div>
          <img src={FiveStar} />
        </div>
        <div className="card">
          <img src={CardImage06} />
          <div>
            <p>Desert King <br />2345km away</p>
            <p>1MBT per night <br />available for 2weeks stay</p>
          </div>
          <img src={FiveStar} />
        </div>
        <div className="card">
          <img src={CardImage07} />
          <div>
            <p>Desert King <br />2345km away</p>
            <p>1MBT per night <br />available for 2weeks stay</p>
          </div>
          <img src={FiveStar} />
        </div>
        <div className="card">
          <img src={CardImage08} />
          <div>
            <p>Desert King <br />2345km away</p>
            <p>1MBT per night <br />available for 2weeks stay</p>
          </div>
          <img src={FiveStar} />
        </div>
      </div>
    </div>
  </section>
)

}

export default CardSection