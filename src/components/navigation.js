/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "gatsby";
import { navStyles } from "../styles/navigation";
import { globalStyles } from "../styles/global";
import homeIcon from "../assets/svg/home.svg";
import blogIcon from "../assets/svg/edit-3.svg";
import menuIcon from "../assets/svg/menu.svg";
import closeIcon from "../assets/svg/close.svg";

export default ({ menuActive, setMenuActive }) => {
  return (
    <div css={navStyles.container}>
      <svg onClick={() => setMenuActive(!menuActive)} css={navStyles.menuIcon}>
        <use xlinkHref={`#${menuActive ? closeIcon.id : menuIcon.id}`} />
      </svg>
      <nav css={navStyles.nav} role="navigation">
        <ul css={navStyles.list}>
          <li>
            <Link css={navStyles.link} to="/">
              <svg css={globalStyles.icon}>
                <use xlinkHref={`#${homeIcon.id}`} />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <Link css={navStyles.link} to="/blog/">
              <svg css={globalStyles.icon}>
                <use xlinkHref={`#${blogIcon.id}`} />
              </svg>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
