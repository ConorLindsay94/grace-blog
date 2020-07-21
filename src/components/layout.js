/** @jsx jsx */
import { jsx, Global } from "@emotion/core";
import React, { useState, useRef, useEffect } from "react";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import Container from "./container";
import Navigation from "./navigation";
import Socials from "./socials";
import { globalStyles } from "../styles/global";
import { layoutStyles } from "../styles/layout";
import { Link, navigate } from "gatsby";

const Template = ({ children }) => {
  const [menuActive, setMenuActive] = useState(false);
  const targetElement = useRef(null);

  const goTo = (path) => {
    setMenuActive(false);
    navigate(path);
  }

  const toggleMenu = (val) => {
    setMenuActive(val);
    if (val) {
      disableBodyScroll(targetElement);
    } else {
      enableBodyScroll(targetElement);
    }
  }

  useEffect(() => {
    return () => {
      clearAllBodyScrollLocks();
    }
  }, []);

  useEffect(() => {
    if (!menuActive) {
      enableBodyScroll(targetElement);
    }
  }, [menuActive]);

  return (
    <>
      <Global styles={globalStyles} />
      <Container>
        <div
          ref={targetElement}
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
            <Navigation menuActive={menuActive} setMenuActive={toggleMenu} />
          </div>
        </header>
        <main css={globalStyles.main}>{children}</main>
        <footer css={layoutStyles.footer}>
          Grace Lindsay | <Socials />
        </footer>
      </Container>
    </>
  );
};

export default Template;
