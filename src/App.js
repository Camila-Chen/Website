import React, { Component } from 'react';
import Categories from './components/Categories';
import Navigation from './components/Navigation';
class App extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <Categories />
      </div>
    );
  }
}

export default App;
