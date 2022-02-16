import { Box, Text, Spinner } from "grommet";
import React, { Component } from "react";
import createScrollSnap from "scroll-snap";

import DirectoryBox from "./DirectoryBox";
import IntroBox from "./IntroBox";

import "./styles.css";

class Home extends Component {
  container = React.createRef();

  constructor(props) {
    super(props);

    this.state = {
      directoryList: [],
    };
  }

  bindScrollSnap() {
    const element = this.container.current;
    createScrollSnap(
      element,
      {
        snapDestinationY: "100%",
        timeout: 100,
        duration: 300,
        threshold: 0.3,
        snapStop: true,
      },
      () => {}
    );
  }

  async componentDidMount() {
    fetch("/api/getAllDirectories", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ directoryList: data });
      });

    this.bindScrollSnap();
  }

  render() {
    return (
      <div id="container" ref={this.container}>
        <IntroBox />
        {this.state ? (
          this.state.directoryList.map((dir) => {
            return DirectoryBox(dir); //<DirectoryBox dir={dir}></DirectoryBox>;
          })
        ) : (
          <Box fill>
            <Spinner />
          </Box>
        )}
      </div>
    );
  }
}

export default Home;
