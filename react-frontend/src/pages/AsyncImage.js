import React, { Component } from "react";
import { Image, Spinner, Box } from "grommet";
import { ipfs } from "./ipfs_script";

class AsyncImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: undefined,
    };
  }

  componentDidMount() {
    ipfs.then(async (iii) => {
      let myArrays = [];
      for await (const chunk of iii.cat(this.props.ipfs_addr)) {
        myArrays.push(chunk);
      }
      // Get the total length of all arrays.
      let length = 0;
      myArrays.forEach((item) => {
        length += item.length;
      });

      // Create a new array with total length and merge all source arrays.
      let mergedArray = new Uint8Array(length);
      let offset = 0;
      myArrays.forEach((item) => {
        mergedArray.set(item, offset);
        offset += item.length;
      });
      this.setState({ image: mergedArray });
    });
  }

  render() {
    if (this.state.image !== undefined) {
      return (
        <Image
          fit="contain"
          src={URL.createObjectURL(
            new Blob([this.state.image.buffer], {
              type: "image/jpg",
            })
          )}
        />
      );
    } else {
      return (
        <Box align="center" justify="center" fill>
          <Spinner
            align={"center"}
            size={"large"}
            message={
              "Loading images might take a while... But they're on their way!"
            }
          />
        </Box>
      );
    }
  }
}

export default AsyncImage;
