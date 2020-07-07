/** @jsx jsx */
import { jsx } from "@emotion/core";

import twitter from "../assets/svg/twitter.svg";
import instagram from "../assets/svg/instagram.svg";
import facebook from "../assets/svg/facebook.svg";
import { socialsStyles } from "../styles/socials";

export default () => (
  <div css={socialsStyles.container}>
    <a
      css={socialsStyles.link}
      target="_blank"
      href="https://twitter.com"
      rel="noreferrer"
    >
      <svg css={socialsStyles.icon}>
        <use xlinkHref={`#${twitter.id}`} />
      </svg>
    </a>
    <a
      css={socialsStyles.link}
      target="_blank"
      href="https://instagram.com"
      rel="noreferrer"
    >
      <svg css={socialsStyles.icon}>
        <use xlinkHref={`#${instagram.id}`} />
      </svg>
    </a>
    <a
      css={socialsStyles.link}
      target="_blank"
      href="https://facebook.com"
      rel="noreferrer"
    >
      <svg css={socialsStyles.icon}>
        <use xlinkHref={`#${facebook.id}`} />
      </svg>
    </a>
  </div>
);
