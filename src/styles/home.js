import { mq } from "./breakpoints";

export const homeStyles = {
  container: {
    maxWidth: "768px",
    margin: "0 auto",
    padding: "16px",
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
  },
  recentPostsHeader: {
    fontSize: "32px",
    margin: 0,
    marginBottom: "16px",
  }
}