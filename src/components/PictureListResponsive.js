import React, { Component } from 'react';
import { getResponsiveImages } from '../actions/imageResponsive.action';
import { withStyles } from '@material-ui/core';
const styles = () => ({
    imageSize: {
        width: '100%',

    },
    box: {
        boxShadow: ['0 -1px 2px 2px rgba(32, 48, 60, .14)',
            '0 -1px 3px 1px rgba(32, 48, 60, .06)'],
        borderRadius: '21px',
        margin: '5vw',
        width: '40vw',

        '@media (max-width:320px)': {
            width: '90vw'
        }
    },
    imageLayout: {
        margin: '15px',
    },
    imageContain: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingTop: '5vh'
    }
});


class PictureListResponsive extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pictures: [],
        };
    }

    componentDidMount() {
        getResponsiveImages()
            .then((response, data) => {
                this.setState({
                    pictures: response
                })
            })
            .catch(function (error) {
                console.log(error)
            });
    }


    render() {
        const { classes } = this.props;
        return (
            <div className={classes.imageContain}>
                {
                    this.state.pictures.map((item, index) => {
                        return (
                            <div className={classes.box}>
                                <div className={classes.imageLayout}>
                                    <img className={classes.imageSize} src={item.img} key={index} alt="正在加载" />
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );

    }
}

export default withStyles(styles)(PictureListResponsive);