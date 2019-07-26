import React from 'react';
import { Link } from 'react-router-dom';
import unlock from '../../images/unlock-dribbble.png'
import venus from '../../images/038-venus.svg';
import purplePlanet from '../../images/018-planets.svg';

const HomePage = () => {
    return (
        <main className='home-page'>
          <img src={unlock} alt='universe through a keyhole' className='home-page-img'/>
            <div className='home-page-heading'>
                <img src={purplePlanet} alt='purple planet icon' className='icon'/>
                <h3>Twinkle, twinkle, little star, point me to the nearest bar.</h3>
                <img src={venus} alt='purple planet icon' className='icon'/>
            </div>
          <Link to='/info'><button className='home-page-btn'>Enter...</button></Link>
        </main>
    )
}

export default HomePage;