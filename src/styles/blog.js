import { mq } from "../styles/breakpoints";

export const blogStyles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0px 16px",
    [mq[3]]: {
      padding: 0
    }
  }
}