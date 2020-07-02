/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'gatsby'
import { navStyles } from '../styles/navigation'

export default () => (
  <nav css={navStyles.container} role="navigation">
    <ul css={navStyles.list}>
      <li>
        <Link css={navStyles.link} to="/">Home</Link>
      </li>
      <li>
        <Link css={navStyles.link} to="/blog/">Blog</Link>
      </li>
    </ul>
  </nav>
)
