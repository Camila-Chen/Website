import React, { Component } from 'react';
import { getResponsiveImages } from '../actions/imageResponsive.action';
import { withStyles } from '@material-ui/core';
import '../styles/pictureResponsive.css'
const styles = () => ({

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
        return (
            <div className="image-contain">
                {
                    this.state.pictures.map((item, index) => {
                        return (
                            <div className="box">
                                <div className="image-layout">
                                    <img src={item.img} alt="正在加载" />
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