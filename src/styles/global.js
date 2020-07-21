export const globalStyles = {
  hero: {
    height: "61.8vh",
    maxHeight: "400px",
  },
  body: {
    backgroundColor: "white",
    fontFamily: "Open Sans",
    fontSize: "1em",
    lineHeight: 1.65,
    margin: 0,
  },
  "h1": {
    fontSize: "40px"
  },
  "h1, h2, h3": {
    fontFamily: "Abril Fatface",
    fontWeight: 100,
  },
  "a": {
    fontFamily: "Abril Fatface",
    textDecoration: "none",
    color: "black",
  },
  icon: {
    height: "17px",
    width: "17px",
    fill: "black",
    marginRight: "8px",
  },
  mobileMenu: {
    position: "absolute",
    width: "100%",
    height: 0,
    backgroundColor: "#AEADF0",
    top: "110px",
    zIndex: "20",
    transition: "height .2s ease",
    overflow: "hidden",
    "& ul": {
      listStyle: "none",
      fontSize: "42px",
      margin: 0,
      padding: 0,
      marginTop: "120px",
      "& li": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "Abril Fatface",
        "& span": {
          letterSpacing: "1px",
        },
        "& svg": {
          fill: "white",
          height: "35px",
          width: "35px",
        }
      }
    }
  },
  mobileMenuActive: {
    height: "100vh",
  }
}