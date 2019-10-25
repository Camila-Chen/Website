import React, { Component } from 'react';
import Categories from './components/Categories';
import Navigation from './components/Navigation';
import PictureList from './components/PictureList';
import './styles/App.css'

class App extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <div>
          <Categories />
          <PictureList />
        </div>
      </div>
    );
  }
}

export default App;
