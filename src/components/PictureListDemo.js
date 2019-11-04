import React, { Component } from 'react';
import { getImages } from '../actions/image.action';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme => ({
    root: {
        backgroundColor: 'red'
    },

}));

class PictureListDemo extends Component {
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
        const { classes } = this.props;

        return (
            <div >
                <Grid classes={classes.root} justify={'center'} spacing={4}>
                    {this.state.pictures.map((item, index) => {
                        return (
                            <img src={item.img} alt='正在加载' />
                        );
                    })}
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(PictureListDemo);