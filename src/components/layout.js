/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Global } from "@emotion/core";
import React from "react";
import Container from "./container";
import Navigation from "./navigation";
import { globalStyles } from "../styles/global";
import { layoutStyles } from "../styles/layout";

class Template extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <>
        <Global styles={globalStyles} />
        <Container>
          <div css={layoutStyles.header}>
            <div css={layoutStyles.container}>
              <div css={layoutStyles.logoContainer}>
                <div css={layoutStyles.logo}>
                  <span>GL</span>
                </div>
              </div>
              <Navigation />
            </div>
          </div>
          {children}
        </Container>
      </>
    );
  }
}

export default Template;
