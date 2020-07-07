import { mq } from "../styles/breakpoints";

export const blogStyles = {
  container: {
    position: "relative",
  },
  body: {
    fontSize: "18px"
  },
  innerContainer: {
    maxWidth: "720px",
    margin: "0 auto",
    padding: "16px",
    backgroundColor: "white",
    "& h1": {
      margin: 0
    },
    [mq[1]]: {
      padding: "16px 32px",
      position: "absolute",
      left: 0,
      right: 0,
      top: "-120px",
    },
  }
}