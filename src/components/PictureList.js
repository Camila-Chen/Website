import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { getImages } from '../actions/image.action';
import clsx from "clsx";


const drawerWidth = 300;


const styles = (theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        width: '70vw',
        position: 'absolute',
        right: '6vw',
        top: '100px',
        paddingBottom: 30,
    },
    gridList: {
        overflow: 'hidden',
    },
    content: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

class PictureList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pictures: [],
        };
    }

    componentDidMount() {
        getImages()
            .then((response, data) => {
                this.setState({
                    pictures: response
                });
            })
            .catch(function (error) {
                console.log(error)
            });
    }


    render() {
        console.log(this.props)
        const { classes } = this.props;
        return (
            <div>

                <div className={classes.root}  >
                    <main
                        className={clsx(classes.content, {
                            [classes.contentShift]: this.props.open,
                        })}
                    >
                        <GridList cellHeight={260} className={classes.gridList} cols={3} spacing={36} >
                            {this.state.pictures.map((item, index) => {
                                return (
                                    <GridListTile key={index} item={item}  >
                                        <img src={item.img} alt='正在加载' />
                                    </GridListTile>
                                );
                            })}
                        </GridList>
                    </main>

                </div>

            </div >
        );
    }
}

export default withStyles(styles)(PictureList);