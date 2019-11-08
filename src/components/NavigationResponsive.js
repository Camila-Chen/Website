import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { withStyles, Drawer, ListItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from '@material-ui/icons/Close';
import List from "@material-ui/core/List";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import Divider from '@material-ui/core/Divider';
import LanguageIcon from "@material-ui/icons/Language";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";


const styles = theme => ({
  headlogo: {
    display: 'flex'
  },
  title: {
    lineHeight: '52px'
  },
  barheight: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  closeButton: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  listContain: {
    height: '100vh'
  }
});

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
    return (
      <div className={classes.root}>
        <AppBar position="static" color="inherit">
          <Toolbar classes={{ regular: classes.barheight }}>
            <div className={classes.headlogo}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <AccountCircle />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                WIX
            </Typography>
            </div>
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
              <List className={classes.listContain}>
                <ListItem classes={{ gutters: classes.closeButton }}>
                  <IconButton onClick={this.handleClose}>
                    <CloseIcon />
                  </IconButton>
                </ListItem>

                <ListItem>
                  <PersonOutlineIcon />
                  <p>Sign Up</p>
                </ListItem>
                <Divider variant="middle" />
                <ListItem button>
                  <p>首页</p>
                </ListItem>
                <ListItem button>
                  <p>功能</p>
                </ListItem>
                <ListItem button>
                  <p>探索</p>
                </ListItem>
                <ListItem button>
                  <p>Wix行动装置应用程式</p>
                </ListItem>
                <Divider variant="middle" />
                <ListItem button>
                  <p>支援</p>
                </ListItem>
                <Divider variant="middle" />
                <ListItem button>
                  <p>Wix部落格</p>
                </ListItem>
                <Divider variant="middle" />

                <ListItem button>
                  <LanguageIcon />
                  <p>简体中文</p>
                  <NavigateNextIcon />

                </ListItem>

              </List>
            </Drawer>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavigationResponsive);
