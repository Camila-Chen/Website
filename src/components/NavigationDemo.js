import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { withStyles } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import "../styles/navigationResponsive.css";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import Divider from "@material-ui/core/Divider";
import LanguageIcon from "@material-ui/icons/Language";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import CloseIcon from "@material-ui/icons/Close";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  barheight: {
    minHeight: 52
  }
});

class NavigationResponsive extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: true,
      anchorEl: null
    };
  }
  handleMenu = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
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
            {this.state.auth && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <div className="menu-list">
                    <div className="close">
                      <CloseIcon onClick={this.handleClose} />
                    </div>
                    <div className="list">
                      <MenuItem>
                        <PersonOutlineIcon />
                        <span className="sign">Sign Up</span>
                      </MenuItem>
                      <Divider />

                      <MenuItem>
                        <p>首页</p>
                      </MenuItem>

                      <MenuItem>
                        <p>功能</p>
                      </MenuItem>
                      <MenuItem>
                        <p>探索</p>
                      </MenuItem>
                      <MenuItem>
                        <p>Wix行动装置应用程式</p>
                      </MenuItem>
                      <Divider />
                      <MenuItem>
                        <p>支援</p>
                      </MenuItem>
                      <Divider variant="middle" />
                      <MenuItem>
                        <p>Wix部落格</p>
                      </MenuItem>
                      <Divider />
                      <div className="language-contain">
                        <div className="language">
                          <p>
                            <LanguageIcon />
                          </p>
                          <p>简体中文</p>
                        </div>
                        <p>
                          <NavigateNextIcon />
                        </p>
                      </div>
                    </div>
                  </div>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavigationResponsive);
