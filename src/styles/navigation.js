export const navStyles = {
  container: {
    width: "200px",
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
    justifyContent: "space-between",
    width: "100%",
    "& li": {
      display: "inline-block",
    }
  }
}