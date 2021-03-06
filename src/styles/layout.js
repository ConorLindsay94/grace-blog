import { mq } from "./breakpoints";

export const layoutStyles = {
  header: {
    display: "flex",
    alignItems: "center",
    height: '100px',
    borderBottom: "10px solid #AEADF0"
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "768px",
    width: "100%",
    margin: "0 auto",
    paddingLeft: "16px",
    paddingRight: "16px",
    [mq[3]]: {
      paddingLeft: 0,
      paddingRight: 0
    },
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "32px",
    color: "white",
    height: "75px",
    width: "75px",
    backgroundColor: "#AEADF0",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center"
  },
  footer: {
    borderTop: "10px solid #AEADF0",
    padding: "32px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}