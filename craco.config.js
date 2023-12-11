// I have no idea how this works exactly and what lines of code are useless

const webpack = require("webpack");

module.exports = {
  webpack: {
    configure: {
      resolve: {
        alias: {
          "@mui/styled-engine": "@mui/styled-engine-sc",
        },
      },
    },
  },
};
