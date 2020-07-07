/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Global } from "@emotion/core";
import React from "react";
import Container from "./container";
import Navigation from "./navigation";
import Socials from "./socials";
import { globalStyles } from "../styles/global";
import { layoutStyles } from "../styles/layout";
import { Link } from "gatsby";

class Template extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <>
        <Global styles={globalStyles} />
        <Container>
          <header css={layoutStyles.header}>
            <div css={layoutStyles.container}>
              <div css={layoutStyles.logoContainer}>
                <Link to="/" css={layoutStyles.logo}>
                  <span>GL</span>
                </Link>
              </div>
              <Navigation />
            </div>
          </header>
          <main>{children}</main>
          <footer css={layoutStyles.footer}>
            Grace Lindsay | <Socials />
          </footer>
        </Container>
      </>
    );
  }
}

export default Template;
