import React, { Component } from "react";
import { Box, Text, Grommet, ResponsiveContext, Grid } from "grommet";
import ImageCarousel from "./ImageCarousel";
import DescriptionBox from "./DescriptionBox";

const DirectoryBox = (dir) => {
  return (
    <div className="page">
      {/* <Grommet full>
        <ResponsiveContext.Consumer>
          {(size) => (
            <>
              {size === "small" ? (
                <Grid
                  areas={[
                    { name: "description", start: [0, 0], end: [0, 0] },
                    { name: "carousel", start: [0, 1], end: [0, 1] },
                  ]}
                  rows={["small", "flex"]}
                  columns={["fill"]}
                  fill
                >
                  <Box gridArea="description" fill>
                    <Text>{dir["name"]}</Text>
                  </Box>
                  <ImageCarousel gridArea="carousel" dir={dir["cid"]} />
                </Grid>
              ) : ( */}
      <Grid
        areas={[
          { name: "description", start: [0, 0], end: [0, 0] },
          { name: "carousel", start: [1, 0], end: [1, 0] },
        ]}
        columns={["1/4", "flex"]}
        rows={["fill"]}
        fill
      >
        <DescriptionBox gridArea="description" title={dir["name"]} />
        <ImageCarousel gridArea="carousel" dir={dir["cid"]} />
      </Grid>
    </div>
  );
};

export default DirectoryBox;
