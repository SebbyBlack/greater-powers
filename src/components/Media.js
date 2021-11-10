import React, { Component } from 'react';
import './Media.css';

import arrow from '../assets/arrow.png';
import bar from '../assets/bar.png';
import bar_mid from '../assets/bar_separator_mid.png';

// cards
const arcane_miss = require('../assets/cardarcanemiss.jpg');
const fireball = require('../assets/cardfireball.jpg');
const lesserhel = require('../assets/cardlesserhel.jpg');
const clockdrag = require('../assets/clockdrag.jpg');
const clockturtlefull = require('../assets/clockturtlefull.jpg');
const darkstarLogo = require('../assets/darkstarLogo.png');
const darkstarLogoTrans = require('../assets/darkstarLogoTrans.png');
const gemini = require('../assets/gemini.JPG');
const GP_logo_2019 = require('../assets/GP_logo_2019.png');
const tiamat = require('../assets/tiamat.jpg');
const turtlesketch = require('../assets/turtlesketch.jpg');
const fighterClass = require('../assets/characterClassPic/fighterClass.jpg');

export default class Media extends Component {
  componentDidMount() {
    this.props.changeNavImg('media');
  }

  sections = [
    {
      name: 'VIDEOS',
      pictures: [
        fighterClass,
        GP_logo_2019
      ]
    }, 
    {
      name: 'SCREENSHOTS',
      pictures: [
        clockturtlefull,
        gemini,
        tiamat
      ]
    }, 
    {
      name: 'CARD CONCEPTS',
      pictures: [
        arcane_miss,
        fireball,
        lesserhel
      ]
    }, 
    {
      name: 'CONCEPT ART',
      pictures: [
        
        turtlesketch,
        clockdrag ,
        
      ]
    }
  ];

  render() {
    return (
      <main>
        <div className="title">
          <h1>Media</h1>
          <img src={bar_mid} />
        </div>

        <div className="sections">
          {this.sections.map(section => (
            <Section section={section} />
          ))}
        </div>

        <div className="bar">
          <img src={bar} />
        </div>
      </main>
    );
  }
}

class Section extends Component {
  render() {
    return (
      <section>
        <div className="section-header">
          <h2>{this.props.section.name}</h2>
          <div className="arrows">
            <img className="divider" src={arrow} alt="" />
            <img className="divider2" src={arrow} alt="" />
          </div>
        </div>
        <div className="image-container">
          { this.props.section.pictures.map(picture => (
            <img
              src = { picture }
              className="image"
            />
          )) }
        </div>
      </section>
    );
  }
}
