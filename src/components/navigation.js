/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "gatsby";
import { navStyles } from "../styles/navigation";
import homeIcon from "../assets/svg/home.svg";
import blogIcon from "../assets/svg/edit-3.svg";
import menuIcon from "../assets/svg/menu.svg";

export default () => (
  <div css={navStyles.container}>
    <svg css={navStyles.menuIcon}>
      <use xlinkHref={`#${menuIcon.id}`} />
    </svg>
    <nav css={navStyles.nav} role="navigation">
      <ul css={navStyles.list}>
        <li>
          <Link css={navStyles.link} to="/">
            <svg css={navStyles.icon}>
              <use xlinkHref={`#${homeIcon.id}`} />
            </svg>
            Home
          </Link>
        </li>
        <li>
          <Link css={navStyles.link} to="/blog/">
            <svg css={navStyles.icon}>
              <use xlinkHref={`#${blogIcon.id}`} />
            </svg>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);
