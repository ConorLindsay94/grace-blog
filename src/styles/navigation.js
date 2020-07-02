export const navStyles = {
  container: {
    width: "20%",
    display: "flex",
    alignItems: "center",
  },
  link: {
    color: "black",
    textDecoration: "none",
  },
  list: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    "& li": {
      display: "inline-block",
    }
  }
}