import { mq } from "./breakpoints";

export const homeStyles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "32px",
  },
  articleList: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    [mq[1]]: {
      flexDirection: "row",
      justifyContent: "space-between"
    }
  }
}