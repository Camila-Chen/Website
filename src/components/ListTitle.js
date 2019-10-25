import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListText from './ListText'
import { getOptions } from '../actions/option.action';
import { Collapse } from '@material-ui/core';


class ListTitle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: [],
            open: false
        };
    }

    componentDidMount() {
        console.log('name')
        getOptions()
            .then((response, data) => {
                this.setState({
                    options: response.filter(option => option.id === this.props.item.id)
                });
            })
            .catch(function (error) {
                console.log(error)
            });
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
                    {this.state.options.map((item, index) => {
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