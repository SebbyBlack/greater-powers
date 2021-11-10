import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AstralIndex.css';

import arrow from '../assets/arrow.png';
import barSeparator from '../assets/bar_separator_mid.png';
import rawrShip from '../assets/rawrship.jpg';
import classes from '../assets/characterClassPic/fighterClass.jpg';
import fireball from '../assets/cardfireball.jpg';

class Encyclopedia extends Component {
    componentDidMount() {
        this.props.changeNavImg('media');
    }
    
    render() {
        return (
          <main className="astral-index">
            <h2>Index</h2>
    
            <img 
              src={barSeparator} 
              alt="" 
            />

            <section>
            <Link to="/shipsindex">
              <h3 className="indexText">The Lore Bible</h3>
              <img className="AIP" src={rawrShip} alt='rawrShip'/>
            </Link>
              <div className="ships">
                {/* content goes here, bg image is a placeholder */}
              </div>
              <div className="index-arrows">
                <img className="index-divider" src={arrow} alt="arrow" />
                <img className="index-divider2" src={arrow} alt="arrow" />
              </div>
            </section>

            <section>
            <Link to="/notFound">
              <h3 className="indexText">Ship Index</h3>
              <img className="AIP" src={classes} alt="classes" />
            </Link>
              <div className="characters">
                {/* content goes here, bg image is a placeholder */}
              </div>
              <div className="index-arrows">
                <img className="index-divider" src={arrow} alt="arrow" />
                <img className="index-divider2" src={arrow} alt="arrow" />
              </div>
            </section>

            <section>
            <Link to="/notFound">
              <h3 className="indexText">Card Index</h3>
              <img className="AIP" src={fireball} alt="fireball" />
            </Link>
              <div className="cards">
                {/* content goes here, bg image is a placeholder */}
              </div>
              <div className="index-arrows">
                <img className="index-divider" src={arrow} alt="arrow" />
                <img className="index-divider2" src={arrow} alt="arrow" />
              </div>
            </section>
          </main>
        );
      }
    
}

export default Encyclopedia
