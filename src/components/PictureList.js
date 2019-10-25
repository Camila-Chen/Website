import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { getImages } from '../actions/image.action';


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
        paddingBottom: 30
    },
    gridList: {
        overflow: 'hidden',
    },

}));

class PictureList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pictures: []
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
        const { classes } = this.props;
        console.log(this.props)
        return (
            <div className={classes.root}  >
                <GridList cellHeight={260} className={classes.gridList} cols={3} spacing={36} >
                    {this.state.pictures.map((item, index) => {
                        return (
                            <GridListTile key={index} item={item}  >
                                <img src={item.img} alt='正在加载' />
                            </GridListTile>
                        );
                    })}
                </GridList>
                {/* <img src={require("../images/image1.png")} alt='正在加载' /> */}

            </div>
        );
    }
}

export default withStyles(styles)(PictureList);