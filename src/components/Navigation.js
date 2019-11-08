import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';

const styles = (theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  root: {
    flexGrow: 1,
    position: 'fixed',
    zIndex: 999,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',

  },
  rightNavigation: {
    marginRight: '3%',
    display: 'flex',
    justifyContent: 'space-around'
  },
  languageicon: {
    margin: 'auto',
    paddingRight: '12%'
  }
});

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 1
    };
  }


  handleChange = (e, value) => {
    this.setState({
      value: value
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="功能" />
          <Tab label="探索" />
          <Tab label="订阅" />
          <Tab label="范本" />
          <Tab label="支援" />

        </Tabs>
        <div className={classes.rightNavigation}>
          <div className={classes.languageicon}>
            <LanguageIcon
              color="primary"
              fontSize="medium" />
          </div>
          <Button variant="outlined" color="primary" className={classes.button}>
            登入
          </Button>

        </div>
      </Paper>

    );
  }
}

export default withStyles(styles)(Navigation);