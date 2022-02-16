import { Box, Heading } from "grommet";
import React, { Component } from "react";

class DescriptionBox extends Component {
  render() {
    return (
      <Box align="center" justify="center" pad="small" fill>
        <Heading textAlign="center">{this.props.title}</Heading>
      </Box>
    );
  }
}

export default DescriptionBox;
