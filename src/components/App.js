import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Break from './Break';
import Questions from './Questions';
import Credits from './Credits';

export default class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div>
          <Header/>
          <div className='container'>
            <Route exact path='/' component={Home}/>
            <Route exact path='/break' component={Break}/>
            <Route exact path='/questions' component={Questions}/>
            <Route exact path='/credits' component={Credits}/>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
