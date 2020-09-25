import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Contacts from './components/Contacts';
import Create from './components/Create';
import Edit from './components/Edit';


class App extends Component {
  render() {
    return (
      <Router>
        <div className='home'>
        <header className='home-header'>
          <h4>MERN-Stack-Contact-app</h4>
          <nav>
            <ul>
              <li>
                <Link to='/'>Contacts</Link>
              </li>
              <li>
                <Link to='/Create'>Create</Link>
              </li>
            </ul>
          </nav>
        </header>
        </div>
        
      <Route path='/' exact component={Contacts}/>
      <Route path='/Create' component={Create} />
      <Route path='/edit/:id' component ={Edit}/>
      </Router>
    );
  }
}

export default App;
