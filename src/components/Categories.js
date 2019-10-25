import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { getCategories } from '../actions/category.action';
import React, { Component } from 'react';
import ListTitle from './ListTitle';
import '../styles/categories.css'
const styles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },

});

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      open: false,
    };
  }

  componentDidMount() {
    getCategories()
      .then((response, data) => {
        this.setState({
          categories: response
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="scroll-bar">
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          {this.state.categories.map((item, index) => {
            return (
              <ListTitle
                item={item}
                key={index}
              />
            );
          })}

        </List>
      </div >
    );
  }
}

export default withStyles(styles)(Categories);

