/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState } from "react";
import { Global } from "@emotion/core";
import Container from "./container";
import Navigation from "./navigation";
import Socials from "./socials";
import { globalStyles } from "../styles/global";
import { layoutStyles } from "../styles/layout";
import { Link, navigate } from "gatsby";

const Template = ({ children }) => {
  const [menuActive, setMenuActive] = useState(false);

  const goTo = (path) => {
    setMenuActive(false);
    navigate(path);
  }

  return (
    <>
      <Global styles={globalStyles} />
      <Container>
        <div
          css={[
            globalStyles.mobileMenu,
            menuActive ? globalStyles.mobileMenuActive : {},
          ]}
        >
          <ul>
            <li>
              <span onClick={() => goTo("/")}>Home</span>
            </li>
            <li>
              <span onClick={() => goTo("/blog/")}>Blog</span>
            </li>
          </ul>
        </div>
        <header css={layoutStyles.header}>
          <div css={layoutStyles.container}>
            <div css={layoutStyles.logoContainer}>
              <Link to="/" css={layoutStyles.logo}>
                GL
              </Link>
            </div>
            <Navigation menuActive={menuActive} setMenuActive={setMenuActive} />
          </div>
        </header>
        <main>{children}</main>
        <footer css={layoutStyles.footer}>
          Grace Lindsay | <Socials />
        </footer>
      </Container>
    </>
  );
};

export default Template;
