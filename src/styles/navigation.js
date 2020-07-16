import { mq } from "./breakpoints";

export const navStyles = {
  container: {
    display: "flex",
    width: "200px",
    alignItems: "center",
    justifyContent: "flex-end",
    [mq[1]]: {
      justifyContent: "flex-start",
    },
  },
  menuIcon: {
    height: "50px",
    width: "50px",
    [mq[1]]: {
      display: "none",
    },
  },
  nav: {
    display: "none",
    [mq[1]]: {
      display: "block",
    },
  },
  link: {
    color: "black",
    textDecoration: "none",
    display: "flex",
    alignItems: "center"
  },
  list: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    "& li": {
      display: "inline-block",
    }
  }
}