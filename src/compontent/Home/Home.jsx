import React from 'react'
import './Home.css'
import Homedata from './Homedata';
import Item from './Item';
import Scroll from './Scroll';

function Home() {
  return (
    <section className='home section' id='home'>
        <div className="home-container container grid">
            <div className="home-content grid">
                <Item />

                <div className="home-img"></div>

                <Homedata />
            </div>  

            <Scroll />
        </div>
    </section>
  )
}

export default Home