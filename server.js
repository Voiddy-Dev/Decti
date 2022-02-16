const express = require("express");
const IPFS = require("ipfs-core");
const CID = require("cids");
const path = require('path');

const app = express();

const PORT = process.env.HTTP_PORT || 80;
app.use(express.static(path.join(__dirname, 'react-frontend', 'build')));

async function setupIpfs() {
  return await IPFS.create();
}

const ipfspromise = setupIpfs();

var rootdirectory = "QmPDVwMSqGSje7K4H8TmNLdwmbmuPuan4iJXAhVDxJ2gZ7";

app.get("/api/updateroot/:root/:key", (req, res) => {
  try {
    console.log(new CID(req.params.root));
    if (req.params.key === "8OFzxUdwcZi9ugFt") {
      console.log(
        "Correct password - old root: " +
          rootdirectory +
          ", new root: " +
          req.params.root
      );
      rootdirectory = req.params.root;
    }
  } catch {
    console.log("wrong cid");
  }
  res.send("ok");
});

app.get("/api/files/:dir", (req, res) => {
  // console.log("Getting files for dir: " + req.params.dir);
  ipfspromise.then(async (ipfs) => {
    let files = [];
    for await (const x of ipfs.ls(req.params.dir)) {
      if (x["type"] == "file") {
        files.push(x["cid"].toString());
      }
    }
    // console.log("FILES", files);
    res.send(JSON.stringify(files));
  });
});

app.get("/api/getAllDirectories", (req, res) => {
  console.log("Getting all directories - IP: " + req.ip);

  ipfspromise.then(async (ipfs) => {
    let dir = [];
    for await (const x of ipfs.ls(rootdirectory)) {
      if (x["type"] == "dir") {
        dir.push({ name: x["name"], cid: x["cid"].toString() });
      }
    }
    // console.log("DIR", dir);
    res.send(JSON.stringify(dir));
  });
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));
