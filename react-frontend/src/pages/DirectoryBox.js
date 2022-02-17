import React, { Component } from "react";
import { Box, Text, Grommet, ResponsiveContext, Grid } from "grommet";
import ImageCarousel from "./ImageCarousel";
import DescriptionBox from "./DescriptionBox";

class DirectoryBox extends Component {
  render() {
    return (
      <div className="page">
        <Grid
          areas={[
            { name: "description", start: [0, 0], end: [0, 0] },
            { name: "carousel", start: [1, 0], end: [1, 0] },
          ]}
          columns={["1/4", "flex"]}
          rows={["fill"]}
          fill
        >
          <DescriptionBox
            gridArea="description"
            title={this.props.dir["name"]}
          />
          <ImageCarousel gridArea="carousel" dir={this.props.dir["cid"]} />
        </Grid>
      </div>
    );
  }
}

export default DirectoryBox;
