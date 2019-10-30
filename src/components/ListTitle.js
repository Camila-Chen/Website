import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListText from './ListText'
import { Collapse } from '@material-ui/core';


class ListTitle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
    }



    handleClick = () => {
        this.setState({
            open: !this.state.open,

        });
    }
    render() {

        return (
            <div >

                <ListItem button onClick={this.handleClick}>

                    <ListItemText primary={this.props.item.name} />
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>


                <Collapse in={this.state.open}>
                    {this.props.item.options.map((item, index) => {
                        return (
                            <ListText
                                item={item}
                                key={index} />

                        );
                    })}
                </Collapse>
            </div>
        );
    }
}

export default ListTitle;