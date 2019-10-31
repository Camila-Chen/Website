import React, { Component } from 'react';
// import Categories from './components/Categories';
// import Navigation from './components/Navigation';
// import PictureList from './components/PictureList';
import NavigationResponsive from './components/NavigationResponsive';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
    };
  }

  handleDrawerOpen = () => {
    this.setState({
      open: true
    })
  }

  handleDrawerClose = () => {
    this.setState({
      open: false
    })
  }


  render() {
    return (
      <div>
        <NavigationResponsive />
        {/* <Navigation /> */}
        {/* <div>
          <Categories
            handleDrawerOpen={this.handleDrawerOpen}
            handleDrawerClose={this.handleDrawerClose}
            open={this.state.open} />
          <PictureList
            open={this.state.open} />
        </div> */}
      </div>
    );
  }
}

export default App;
