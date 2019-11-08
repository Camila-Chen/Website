import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { getImages } from "../actions/image.action";
import clsx from "clsx";

const styles = theme => ({

  content: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: "5%",
    marginLeft: '313px'
  },
  contentShift: {
    marginLeft: '0'
  },
  imgposition: {
    margin: "36px"
  },
  size: {
    flexGrow: 1
  }
});

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
        console.log(error);
      });
  }
  render() {
    const { classes } = this.props;
    return (
      <main className={clsx(classes.content, { [classes.contentShift]: !this.props.open })}>
        {this.state.pictures.map((item, index) => {
          return (
            <img
              className={clsx(classes.imgposition, {
                [classes.size]: !this.props.open
              })}
              src={item.img}
              alt="正在加载"
              key={index}
            />
          );
        })}
      </main>
    );
  }
}

export default withStyles(styles)(PictureList);
