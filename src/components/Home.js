import React, { Component } from 'react';
import NavBar from './NavBar';

import './Home.css';
import arrow from '../assets/arrow.png';
import barSeparator from '../assets/bar_separator_mid.png';

export default class Home extends Component {
  componentDidMount() {
    this.props.changeNavImg('default');
  }

  render() {
    return (
      <div className="homeContainer">
        <div className="home-content">
          <div className="about-game">
            <h2> About The Game </h2>
            <p className="overviewText">
            Greater Powers is first a game about Fantasy Capital Ship battles. 
            And epic rpg storytelling.
            In the game, players will be able to control a selected hero
            and follow their story as the campaign progresses through
            the plot written by our storytellers.
            These heroes are powerful characters capable of using a 
            wide variety of weapons and abilities.
            Players will be able to guide their heroes through instanced zones,
            speak to NPC’s, encounter challenges, battles, and learn 
            to use new and exciting powers and abilities.
            </p>
          </div>

          <div>
            <img className="separator" src={barSeparator} alt="" />
          </div>
          <h3 >Important News</h3>
          <div className="about-game-news">
            <div className="imgNews1"></div>
            <p className='newsText1'>
              Date: September 12th, 2019
              <br></br>
              <br></br>
              Long Held to be the deadliest and most coveted small strike craft ever built, the WASP, or winged aerial strike patroller, has been the mainstay of the tower’s defense and offensive strategies for decades.

These flying battle Mechanoid were built by Sektor Craftwerks in the lower foundry quadrant. Originally meant to be deployed alongside MANTIS ground assault mecha, WASPS proved to be a far superior machine and the advanced Thought engines that ran their mission parameters prognosticators were far more stable. So while the mechaslashers all went rogue and killed their tower masters. The WASP has been in flawless and exemplary service for over three decades .

Built of the highest quality Porcelite and filled with the highest endurance clockwork motors and thinking engines, these semi sentient Mechanoid strike craft can roam far from their mother ship and return without fail. Advanced prognosticator crystal receivers in the Mechanoids optical receiver array allow heroes to gain direct flight control of one of these Mechanoid killers in mid flight.

Armed with an array of Blitzhammer bolt launchers on its forelimbs and a Tail mounted Teslacaster repeating Powercrossbow, the WASP is deadly and able to devastate even large ships with this weapons loadout.

Coupled with its light weight and enhanced Ivory Tower Astral Collector and Energy Booster technology, these nimble strike craft are fast and maneuverable.
            </p>
          </div>
          <div className="about-game">
            <div classname="arrows">
              <img className="divider" src={arrow} alt="" />
              <img className="divider2" src={arrow} alt="" />
            </div>
          </div>

          <div className="about-game-news">
            <div className="imgNews2"></div>
            <p className='newsText2'>
              Date: September 6th, 2019
              <br></br>
              <br></br>
              As usual it’s been a crazy amazing week of development. Our artists have been furiously creating the signature look that is Greater Powers.

              From testing how jewelry sits on characters like this amazing Succubus (credits Sanne van Dijk and Ali N'cir) making sure every little detail is right is part of the game making process.

              All the way to intricate and beautiful pocketwatch accessories by Alla Nasr and massive ship mounted Arc Cannons by arkadiusz.

              And let’s not forget the skyships and locations
              The War Wyrm Cruiser by Arcadeous and Cartographers Guild by Marky Cristobol.

              All this original art and more for players to enjoy in our upcoming multiplayer RPG, Greater Powers (Q4 2020 Xbox,PlayStation,PC) 
            </p>
          </div>

          <div className="about-game">
          <div classname="arrows">
              <img className="divider" src={arrow} alt="" />
              <img className="divider2" src={arrow} alt="" />
            </div>
            <img src="../" alt="" />
          </div>

          <div className="about-game-news">
            <div className="imgNews3"></div>
            <p className='newsText3'>
              Date: August 13th, 2019
              <br></br>
              <br></br>
            Symbols and iconography. Sigils and Emblems.

            These details are essential in creating a believable fantasy world setting and creating them is no easy task.

            This weekend we take you on a visual journey of creating the new Greater Powers Logo from concept art all the way to completion of a digital masterpiece. Our art director has allowed us an amazing inside glimpse into the steps it takes to create world class video game art

            Original beautiful art on this level is rare in any field, but we are bringing it to you on the PlayStation, Xbox, and PC next year.

            #GreaterPowers

            Credits: Arcadeous Phoenix 
            </p>
          </div>

          <div className="about-game">
      
          </div>
        </div>
      </div>
    );
  }
}
