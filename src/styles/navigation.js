export const navStyles = {
  container: {
    width: "20%",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    height: "15px",
    width: "15px",
    fill: "black",
    marginRight: "8px"
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
    justifyContent: "space-evenly",
    width: "100%",
    "& li": {
      display: "inline-block",
    }
  }
}