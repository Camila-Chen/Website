import React, { Component } from 'react';
import Collapse from '@material-ui/core/Collapse';
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
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Collapse in={this.props.open} timeout="auto" unmountOnExit >
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItem>
                    </List>
                </Collapse>
            </div>
        );
    }
}

export default withStyles(styles)(Fold);
