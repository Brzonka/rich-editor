import { globalCss } from "@stitches/react";

const globalStyles = globalCss({
  html: {
    fontSize: "10px",
  },
  body: {
    backgroundColor: "#fefefe",
    margin: 0,
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
  },
});

globalStyles();
