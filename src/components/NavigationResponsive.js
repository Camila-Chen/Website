import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { withStyles, Drawer } from "@material-ui/core";
import "../styles/navigationResponsive.css";
import MenuIcon from "@material-ui/icons/Menu";

import ListTitle from "./ListTitle";
import List from "@material-ui/core/List";

const styles = theme => ({});

class NavigationResponsive extends Component {
  constructor(props) {
    super(props);

    this.state = {
      top: false
    };
  }

  handleOpen = () => {
    this.setState({
      top: true
    });
  };

  handleClose = () => {
    this.setState({
      top: false
    });
  };

  render() {
    const { classes } = this.props;
    const open = Boolean(this.state.anchorEl);
    console.log(this.props);
    return (
      <div className={classes.root}>
        <AppBar position="static" color="inherit">
          <Toolbar classes={{ regular: classes.barheight }}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <AccountCircle />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              WIX
            </Typography>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={this.handleOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={this.state.top}
              onClose={this.handleClose}
            >
              <List></List>
            </Drawer>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavigationResponsive);
