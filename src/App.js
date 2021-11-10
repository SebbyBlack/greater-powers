import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';

// Page Components

import Home from './components/Home';
import Contact from './components/Contact';
import Roadmap from './components/Roadmap';
import AstralIndex from './components/AstralIndex';
import Media from './components/Media';
import Purchase from './components/Purchase';
import Test from './components/Test';
import NotFound from './components/NotFound';
import ShipsIndex from './components/shipsIndex/ShipsIndex';

// navbar images
// import gameLogo from './assets/go_logo.png';

class App extends React.Component {
  state = {
    navImg: 'default'
  }

  changeNavImg = type => {
    this.setState({ navImg: type })
  }

  render() {
    return (
      <Router>
        <div className='app'>
          <NavBar 
            navImg = { this.state.navImg }
          />
          <Switch>
            <Route 
              exact path="/" 
              render = { props => (
                <Home 
                  changeNavImg = { this.changeNavImg }
                /> 
              ) } 
            />
            <Route 
              exact path="/contact" 
              render = { props => (
                <Contact 
                  changeNavImg = { this.changeNavImg }
                /> 
              ) } 
            />
            <Route 
              exact path="/roadmap" 
              render = { props => (
                <Roadmap 
                  changeNavImg = { this.changeNavImg }
                /> 
              ) } 
            />
            <Route 
              exact path="/astral-index" 
              render = { props => (
                <AstralIndex 
                  changeNavImg = { this.changeNavImg }
                /> 
              ) } 
            />
            <Route 
              exact path="/media" 
               render = { props => (
                <Media 
                  changeNavImg = { this.changeNavImg }
                />
              ) } 
            />
            <Route 
              exact path="/purchase" 
              render = { props => (
                <Purchase 
                  changeNavImg = { this.changeNavImg }
                /> 
              ) } 
            />
            <Route exact path="/test" component={Test} />
            
            <Route exact path="/notFound" component={ NotFound } />
            
            <Route exact path="/shipsindex" component= {ShipsIndex} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
