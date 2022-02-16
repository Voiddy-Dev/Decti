import React, { Component } from "react";
import { Box, Text, Heading, WorldMap } from "grommet";

class IntroBox extends Component {
  render() {
    return (
      <div className="page">
        <Box align="center" justify="center" fill>
          <Heading margin={"small"}>Decti Picture Spot</Heading>
          <Text size="large">Marin Duroyon</Text>

          <Box justify="center" align="center" margin="large">
            <WorldMap color="brand" />
          </Box>
          <Text textAlign="center" margin={"large"}>This site uses IPFS' decentralized data storage, therefore, it may take time to load.</Text>
        </Box>
      </div>
    );
  }
}
export default IntroBox;
