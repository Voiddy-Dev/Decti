import React, { Component } from "react";
import { Box, Carousel, Spinner, Image, Text } from "grommet";
import AsyncImage from "./AsyncImage";

class ImageCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
    };
  }

  componentDidMount() {
    fetch("/api/files/" + this.props.dir, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ files: data });
      });
  }

  render() {
    return (
      <>
        {this.state.files.length ? (
          <Box fill>
            <Carousel fill>
              {this.state.files.map((data) => {
                return <AsyncImage ipfs_addr={data} />;
              })}
            </Carousel>
          </Box>
        ) : (
          <Spinner />
        )}
      </>
    );
  }
}

export default ImageCarousel;
