import React, { Component } from 'react';
import { withStyles, Drawer, ListItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { getCategories } from '../actions/category.action';
import ListTitle from './ListTitle';
import List from '@material-ui/core/List';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from "@material-ui/core/IconButton";


const styles = () => ({
    root: {
        paddingTop: '3%',
        display: "flex",
        justifyContent: "center"
    },
    closeButton: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    listHeight: {
        height: '100vh'
    }
});




class CategoriesResponsive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top: false,
            categories: [],

        }
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
            top: true
        })
    }
    handleClose = () => {
        this.setState({
            top: false
        })
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Button onClick={this.handleClick}>Categories ></Button>
                <Drawer
                    anchor="top"
                    open={this.state.top}
                    onClose={this.handleClose}
                >
                    <List className={classes.listHeight} >
                        <ListItem classes={{ gutters: classes.closeButton }}>
                            <IconButton onClick={this.handleClose}>
                                <CloseIcon />
                            </IconButton>
                        </ListItem>
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
            </div>
        );
    }
}

export default withStyles(styles)(CategoriesResponsive);