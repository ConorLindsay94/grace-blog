import { mq } from "../styles/breakpoints";

export const blogStyles = {
  articleHeader: {
    paddingBottom: "13px",
    borderBottom: "2px solid #AEADF0",
    "& p": {
      margin: 0,
    }
  },
  container: {
    position: "relative",
  },
  body: {
    fontSize: "18px",
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
      position: "relative",
      left: 0,
      right: 0,
      top: "-150px",
    },
  },
  meta: {
    display: "flex",
    alignItems: "center",
  }
}

export const blogListStyles = {
  container: {
    maxWidth: 768,
    margin: "0 auto",
    padding: "16px",
  },
  hero: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "61.8vh",
    maxHeight: "400px",
    overflow: "hidden",
  },
  blogPost: {
    padding: "16px 0px",
    "& h2": {
      margin: 0
    },
    "& small": {
      display: "block"
    },
    "& p": {
      margin: 0
    }
  },
  meta: {
    display: "flex !important",
    alignItems: "center",
  }
}