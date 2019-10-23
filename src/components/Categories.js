import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { getCategories } from '../actions/category.action';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import React, { Component } from 'react';
import Fold from './Fold'
const styles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
});

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      open: false
    };
    this.handleClick = this.handleClick.bind(this);
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

  handleClick = () => {
    this.setState({
      open: !this.state.open
    })
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          {this.state.categories.map((item, index) => {
            return (
              < div >

                <ListItem key={item.id} button onClick={this.handleClick}>
                  <ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                  {this.state.open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Fold
                  open={this.state.open} />
              </div>
            );
          })}

        </List>
      </div >
    );
  }
}

export default withStyles(styles)(Categories);

