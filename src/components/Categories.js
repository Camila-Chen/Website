import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { getCategories } from '../actions/category.action';
import React, { Component } from 'react';
import ListTitle from './ListTitle';
import ListSubheader from '@material-ui/core/ListSubheader';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const drawerWidth = 313;

const styles = (theme) => ({
  root: {
    overflow: 'auto',
    maxHeight: '100vh',
    position: 'fixed',
    left: 0,
    top: '52px'
  },
  drawer: {
    witdh: drawerWidth
  },

  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-end',
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop: 52
  },
});

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
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

  handleDrawerOpen = () => {
    this.props.handleDrawerOpen(this.props.open);

  }

  handleDrawerClose = () => {
    this.props.handleDrawerClose(this.props.open);

  }


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleDrawerOpen}

        >
          <ArrowForwardIosIcon />

        </IconButton>

        <Drawer
          className={classes.drawer}
          open={this.props.open}
          variant="persistent"
          anchor="left"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}
            >
              <ArrowBackIosIcon />

            </IconButton>
          </div>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                类别
            </ListSubheader>
            }
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
        </Drawer>
      </div >
    );
  }
}

export default withStyles(styles)(Categories);

