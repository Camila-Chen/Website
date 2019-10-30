import React, { Component } from 'react';
import StarBorder from '@material-ui/icons/StarBorder';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';


const styles = (theme) => ({

    nested: {
        paddingLeft: theme.spacing(4),
    },
});


class Fold extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary={this.props.item} />
                    </ListItem>
                </List>
            </div>
        );
    }
}

export default withStyles(styles)(Fold);
