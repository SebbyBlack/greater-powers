import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

import bar from '../assets/bar.png';

const gameLogo = require('../assets/go_logo.png');

export default class NavBar extends Component {
  state = {
    navImg: null
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.navImg !== prevState.navImg) {
      return {
        navImg: nextProps.navImg
      };
    }
  }

  render() {
    console.log(this.state.navImg);
    return (
      <div className="container">
        <header className={this.state.navImg === 'media' ? 'media-nav' : 'default'}>
          <nav style={{ display:'flex',flexDirection:'row',justifyContent:'center'}}>
            <Link to="/">
            
              <div className="linkbtn">
            
                <h3 className="btnTitle">Home</h3>
              </div>
            </Link>
            <Link to="/astral-index">
            
              <div className="linkbtn">
                
                <h3 className="astral ">Astral Index</h3>
              </div>
            </Link>
            <Link to="/media">
              
              <div className="linkbtn">
               
                <h3 className="btnTitle">Media</h3>
              </div>
            </Link>
            <Link to="/contact">
             
              <div className="linkbtn">
              
                <h3 className="btnTitle">Contact</h3>
              </div>
            </Link>
            <Link to="/purchase">
           
              <div className="linkbtn">
              
                <h3 className="btnTitle btnPre">Invest</h3>
              </div>
            </Link>
          </nav>

          { this.props.navImg === 'default' ?
            <div className="gameLogo">
              <img
                src={ gameLogo }
                alt="logo"
                style={{ margin: 'auto' }}
              />
            </div>
          :
            null
          }
          
        </header>
        <img
          src={bar}
          style={{ width: '100%', position: 'relative', bottom: '10px' }}
          alt="docorativeBar"
        />
      </div>
    );
  }
}
