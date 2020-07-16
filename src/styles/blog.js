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