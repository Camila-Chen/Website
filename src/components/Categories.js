import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { getCategories } from '../actions/category.action';
import React, { Component } from 'react';
import ListTitle from './ListTitle';
import '../styles/categories.css'
import ListSubheader from '@material-ui/core/ListSubheader';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },

  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    marginLeft: -drawerWidth,
  },
  contentShift: {
    marginLeft: 0,
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
      <div className="scroll-bar">
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: this.props.open,
          })}
        >
          <div className="open-drawer">
            <IconButton
              color="primary"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, this.props.open && classes.hide)}
            >
              <ArrowForwardIosIcon
                color="primary" />
            </IconButton>
          </div>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={this.props.open}
            classes={{
              paper: classes.drawerPaper
            }}
          >

            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  类别
            </ListSubheader>
              }
            // className={classes.root}
            >
              <IconButton onClick={this.handleDrawerClose}>
                <ArrowBackIosIcon />

              </IconButton>

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
        </main>
      </div >
    );
  }
}

export default withStyles(styles)(Categories);

